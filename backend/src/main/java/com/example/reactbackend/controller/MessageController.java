package com.example.reactbackend.controller;


import com.example.reactbackend.entity.Message;
import com.example.reactbackend.pojo.MessagePojo;
import com.example.reactbackend.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/user/message")
@RequiredArgsConstructor

public class MessageController {
    private final MessageService messageService;

    @PostMapping("/save")
    public String saveMessage( @RequestBody MessagePojo messagePojo) {
        return messageService.save(messagePojo);
    }

    @GetMapping("/getAll")
    public List<Message> getAll() {
        return messageService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Message> getById(@PathVariable("id") Long id) {
        Optional<Message> message = messageService.getById(id);
        return message.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
        messageService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateMessage(@PathVariable("id") Long id, @RequestBody MessagePojo messagePojo) {
        String result = messageService.update(id, messagePojo);
        return ResponseEntity.ok(result);
    }
}



