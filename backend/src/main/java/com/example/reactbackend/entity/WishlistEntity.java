//package com.example.reactbackend.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import jakarta.persistence.*;
//import lombok.Data;
//
//
//import java.util.List;
//
//@Data
//@Entity
//@Table(name="wishlist")
//public class WishlistEntity {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int WishlistId;
//	private double totalPrice;
//
//	@JsonIgnore
//	@OneToMany(targetEntity = ProductEntity.class)
//	private List<ProductEntity> products;
//	@Id
//	private Long id;
//
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public Long getId() {
//		return id;
//	}
//}
