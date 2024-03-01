package com.example.reactbackend.entity;

import jakarta.persistence.*;

import lombok.Getter;

import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "Orders")


public class Order {
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "cust_email")
    private String customerEmail;


    @Column(name = "product_name")
    private String productName;


    @Column(name = "total_amount")
    private Integer totalAmount;

    @Column(name = "status")
    private String status;





}


