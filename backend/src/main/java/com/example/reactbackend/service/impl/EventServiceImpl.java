package com.example.reactbackend.service.impl;


import com.example.reactbackend.entity.Event;
import com.example.reactbackend.entity.Order;
import com.example.reactbackend.pojo.EventPojo;
import com.example.reactbackend.pojo.OrderPojo;
import com.example.reactbackend.repo.EventRepo;
import com.example.reactbackend.repo.OrderRepo;
import com.example.reactbackend.service.EventService;
import com.example.reactbackend.service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class EventServiceImpl implements EventService {
    private final EventRepo eventRepo;

    public EventServiceImpl(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @Override
    public String save(EventPojo eventPojo) {
        Event event;
        if (eventPojo.getEventId() != null) {
            event = eventRepo.findById(eventPojo.getEventId())
                    .orElseThrow(() -> new EntityNotFoundException("Event  not found with ID: " + eventPojo.getEventId()));
        } else {
            event = new Event();
        }

        event.setTitle(eventPojo.getTitle());
        event.setStart(eventPojo.getStart());
        event.setEnd(eventPojo.getEnd());


        // Save the order to the database
        eventRepo.save(event);

        return "Order saved successfully";
    }




    @Override
    public List<Event> getAll() {
        return eventRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        eventRepo.deleteById(id);
    }


    @Override
    public Optional<Event> getById(Long id) {
        return eventRepo.findById(id);
    }
}
