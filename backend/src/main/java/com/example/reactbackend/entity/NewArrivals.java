package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table (name = "new_arrivals")
@Getter
@Setter

public  class NewArrivals {
    @Id
    @SequenceGenerator(name = "new_arrivals_seq_gen", sequenceName = "new_arrivals_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "new_arrivals_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long productId;

    private String image;

    @Column(name = "brand_name")
    private String brandName;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "discounts")
    private String discount;

    @Column(name = "status")
    private String status;



}
