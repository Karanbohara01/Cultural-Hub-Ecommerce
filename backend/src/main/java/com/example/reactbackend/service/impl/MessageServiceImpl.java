package com.example.reactbackend.service.impl;

import com.example.reactbackend.entity.Message;
import com.example.reactbackend.pojo.MessagePojo;
import com.example.reactbackend.repo.MessageRepo;
import com.example.reactbackend.service.MessageService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class MessageServiceImpl implements MessageService {
    private final MessageRepo messageRepo;

    public MessageServiceImpl(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @Override
    public String save(MessagePojo messagePojo) {
        Message message;
        if (messagePojo.getMessageId() != null) {
            message = messageRepo.findById(messagePojo.getMessageId())
                    .orElseThrow(() -> new EntityNotFoundException("message not found with ID: " + messagePojo.getMessageId()));
        } else {
            message = new Message();
        }

        message.setFirstName(messagePojo.getFirstName());
        message.setLastName(messagePojo.getLastName());
        message.setEmailAddress(messagePojo.getEmailAddress());
        message.setMessage(messagePojo.getMessage());
        messageRepo.save(message);

        return "Message saved successfully";
    }

    @Override
    public List<Message> getAll() {
        return messageRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        messageRepo.deleteById(id);
    }

    @Override
    public String update(Long id, MessagePojo messagePojo) {
        Optional<Message> optionalMessage = messageRepo.findById(id);
        if (optionalMessage.isPresent()) {
            Message existingMessage = optionalMessage.get();
            existingMessage.setFirstName(messagePojo.getFirstName());
            existingMessage.setLastName(messagePojo.getLastName());
            existingMessage.setEmailAddress(messagePojo.getEmailAddress());
            existingMessage.setMessage(messagePojo.getMessage());
            messageRepo.save(existingMessage);
            return "Message updated successfully";
        } else {
            throw new EntityNotFoundException("message not found with ID: " + id);
        }
    }

    @Override
    public Optional<Message> getById(Long id) {
        return messageRepo.findById(id);
    }
}
