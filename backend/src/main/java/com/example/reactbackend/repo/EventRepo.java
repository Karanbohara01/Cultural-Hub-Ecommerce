package com.example.reactbackend.repo;

import com.example.reactbackend.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event,Long> {
}
