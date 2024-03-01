package com.example.reactbackend.service;



import com.example.reactbackend.entity.Event;

import com.example.reactbackend.pojo.EventPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service

public interface EventService {
    String save(EventPojo eventPojo) throws IOException;
    List<Event>getAll();
    void deleteById(Long id);
    Optional<Event> getById(Long id);

}
