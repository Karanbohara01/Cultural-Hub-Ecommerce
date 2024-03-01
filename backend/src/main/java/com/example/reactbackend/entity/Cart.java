package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="carts")
@Getter
@Setter
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private SystemUser systemUser;

    @ManyToOne
    @JoinColumn(name="product_id",unique = true)
    private Products products;

    @Column(name="total_price")
    private Integer total_price;

    @Column(name="quantity")
    private Integer quantity;



}
