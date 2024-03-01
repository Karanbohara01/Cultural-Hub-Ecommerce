//package com.example.reactbackend.controller;
//
//
//import com.example.reactbackend.entity.Event;
//import com.example.reactbackend.pojo.EventPojo;
//
//import com.example.reactbackend.service.EventService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/admin/event")
//@RequiredArgsConstructor
//
//public class EventController {
//    private final EventService eventService;
//
////    @PostMapping("/save")
////    public String saveEvent( @RequestBody EventPojo eventPojo) throws IOException {
////        return eventService.save(eventPojo);
////    }
//
//    @PostMapping("/save")
//    public ResponseEntity<String> saveEvent(@RequestBody EventPojo eventPojo) {
//        try {
//            String savedEvent = eventService.save(eventPojo);
//            return ResponseEntity.status(HttpStatus.CREATED).body(savedEvent);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//
//
//    @GetMapping("/getAll")
//    public List<Event> getAll() {
//        return eventService.getAll();
//    }
//
//    @GetMapping("/getById/{id}")
//    public ResponseEntity<Event> getById(@PathVariable("id") Long id) {
//        Optional<Event> event = eventService.getById(id);
//        return event.map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
//        eventService.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
//
//
//}
//
//
//

package com.example.reactbackend.controller;

import com.example.reactbackend.entity.Event;
import com.example.reactbackend.pojo.EventPojo;
import com.example.reactbackend.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin/event")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping("/save")
    public ResponseEntity<String> saveEvent(@RequestBody EventPojo eventPojo) {
        try {
            // Save the event and get the created event
            String createdEvent = eventService.save(eventPojo);

            // Return the created event in the response with HTTP status CREATED
            return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
        } catch (Exception e) {
            // If there is an exception, return an error response with INTERNAL_SERVER_ERROR status
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Event>> getAll() {
        // Get the list of events
        List<Event> events = eventService.getAll();

        // Return the list of events in the response with HTTP status OK
        return ResponseEntity.ok(events);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Event> getById(@PathVariable("id") Long id) {
        // Get the event by ID
        Optional<Event> event = eventService.getById(id);

        // Return the event in the response with OK status if present, otherwise, return NOT_FOUND
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
        // Delete the event by ID
        eventService.deleteById(id);

        // Return an OK response with no content
        return ResponseEntity.ok().build();
    }
}

