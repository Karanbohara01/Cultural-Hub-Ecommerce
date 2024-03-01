package com.example.reactbackend.service.impl;


import com.example.reactbackend.entity.Order;
import com.example.reactbackend.pojo.OrderPojo;
import com.example.reactbackend.repo.OrderRepo;
import com.example.reactbackend.service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class OrderServiceImpl implements OrderService {
    private final OrderRepo orderRepo;

    public OrderServiceImpl(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @Override
    public String save(OrderPojo orderPojo) {
        Order order;
        if (orderPojo.getOrderId() != null) {
            order = orderRepo.findById(orderPojo.getOrderId())
                    .orElseThrow(() -> new EntityNotFoundException("Order not found with ID: " + orderPojo.getOrderId()));
        } else {
            order = new Order();
        }

        order.setCustomerName(orderPojo.getCustomerName());
        order.setCustomerEmail(orderPojo.getCustomerEmail());
        order.setProductName(orderPojo.getProductName());
        order.setStatus(orderPojo.getStatus());
        order.setTotalAmount((int) orderPojo.getTotalAmount());


        // Save the order to the database
        orderRepo.save(order);

        return "Order saved successfully";
    }

    @Override
    public String updateStatus(Long id, String newStatus) {
        return null;
    }


    @Override
    public List<Order> getAll() {
        return orderRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        orderRepo.deleteById(id);
    }

    @Override
    public String update(Long id, OrderPojo orderPojo) {
        Optional<Order> optionalOrder = orderRepo.findById(id);
        if (optionalOrder.isPresent()) {
            Order existingOrder = optionalOrder.get();
            existingOrder.setStatus(orderPojo.getStatus());
//            existingOrder.setCustomerEmail(orderPojo.getCustomerEmail());
//            existingOrder.setProductName(orderPojo.getProductName());
//            existingOrder.setAction(orderPojo.getAction());
            orderRepo.save(existingOrder);
            return "Order updated successfully";
        } else {
            throw new EntityNotFoundException("order not found with ID: " + id);
        }
    }

    @Override
    public Optional<Order> getById(Long id) {
        return orderRepo.findById(id);
    }
}
