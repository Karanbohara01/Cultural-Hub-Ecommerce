package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

//package com.example.reactbackend.entity;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//
//import java.util.List;
//
//@Data
//@Entity
//@Table(name="cart")
//public class CartEntity {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int cartId;
//	private int productCount;
//	private double totalPrice;
//	private String brandName;
//	private Long userId;
//
//
//	public void setProducts(List<Products> productsList) {
//	}
//}
@Data
@Entity
@Table(name = "cart")
public class CartEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	private int productCount;
	private double totalPrice;
	private String brandName;
	private String productName;
	private Long productPrice;
	private String image;


	// Rename userId to user_id for consistency
	@Column(name = "user_id")
	private Long userId;

	@ManyToOne
	@JoinColumn(name = "product_id", referencedColumnName = "productId")
	private Products products;

	public void setProducts(List<Products> productsList) {
	}
}

