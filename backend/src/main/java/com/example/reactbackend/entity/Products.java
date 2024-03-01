package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "products")
@Getter
@Setter

public class Products {
    @Id
    @SequenceGenerator(name = "add_products_seq_gen", sequenceName = "add_products_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "add_products_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long productId;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "brand_name")
    private String brandName;
    @Column(name = "product_price")
    private Double productPrice;
    @Column (name = "productDescription")
    private  String productDescription;
    private String image;
}
