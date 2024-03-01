//package com.example.reactbackend.controller;
//import com.example.reactbackend.entity.Order;
//import com.example.reactbackend.pojo.OrderPojo;
//import com.example.reactbackend.service.OrderService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@CrossOrigin("*")
//@RestController
//@RequestMapping("/admin/order")
//
//@RequiredArgsConstructor
//
//public class OrderController {
//    private final OrderService orderService;
//
//    @PostMapping("/save")
//    public String saveOrder( @RequestBody OrderPojo orderPojo) {
//        return orderService.save(orderPojo);
//    }
//
//    @GetMapping("/getAll")
//    public List<Order> getAll() {
//        return orderService.getAll();
//    }
//
//    @GetMapping("/getById/{id}")
//    public ResponseEntity<Order> getById(@PathVariable("id") Long id) {
//        Optional<Order> order = orderService.getById(id);
//        return order.map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
//        orderService.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<String> updateOrder(@PathVariable("id") Long id, @RequestBody OrderPojo orderPojo) {
//        String result = orderService.update(id, orderPojo);
//        return ResponseEntity.ok(result);
//    }
//}
//
//
//


package com.example.reactbackend.controller;

import com.example.reactbackend.entity.Order;
import com.example.reactbackend.pojo.OrderPojo;
import com.example.reactbackend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/save")
    public ResponseEntity<String> saveOrder(@RequestBody OrderPojo orderPojo) {
        // Set default status to "Pending" if not provided
        if (orderPojo.getStatus() == null || orderPojo.getStatus().isEmpty()) {
            orderPojo.setStatus("Pending");
        }

        String result = orderService.save(orderPojo);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getAll")
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Order> getById(@PathVariable("id") Long id) {
        Optional<Order> order = orderService.getById(id);
        return order.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
        orderService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateOrder(@PathVariable("id") Long id, @RequestBody OrderPojo orderPojo) {
        String result = orderService.update(id, orderPojo);
        return ResponseEntity.ok(result);
    }
}

