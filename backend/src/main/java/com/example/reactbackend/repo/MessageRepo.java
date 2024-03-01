package com.example.reactbackend.repo;


import com.example.reactbackend.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message,Long> {
}
