package com.example.reactbackend.service;

import com.example.reactbackend.entity.Order;
import com.example.reactbackend.pojo.OrderPojo;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    String save(OrderPojo orderPojo);

    String updateStatus(Long id, String newStatus);

    List<Order> getAll();

    void deleteById(Long id);

    Optional<Order> getById(Long id);

    String update(Long id, OrderPojo orderPojo);
}

