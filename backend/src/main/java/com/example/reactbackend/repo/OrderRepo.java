package com.example.reactbackend.repo;

import com.example.reactbackend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository <Order, Long> {
}



