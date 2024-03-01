package com.example.reactbackend.service;


import com.example.reactbackend.entity.Message;
import com.example.reactbackend.pojo.MessagePojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public interface MessageService {
    String save(MessagePojo messagePojo);

    List<Message> getAll();

    void deleteById(Long id);

    String update(Long id, MessagePojo messagePojo);

    Optional<Message> getById(Long id);

}
