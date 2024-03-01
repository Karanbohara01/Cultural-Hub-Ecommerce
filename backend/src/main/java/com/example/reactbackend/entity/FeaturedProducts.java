package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;



@Entity
@Table (name = "featured_products")
@Getter
@Setter

public  class FeaturedProducts {
    @Id
    @SequenceGenerator(name = "fea_products_seq_gen", sequenceName = "fea_products_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "fea_products_seq_gen", strategy = GenerationType.SEQUENCE)
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
