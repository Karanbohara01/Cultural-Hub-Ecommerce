package com.example.reactbackend.dto;

import com.example.reactbackend.entity.Products;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
public class CartDto {

	private String brandName; // Change to field name
	private int productCount;
	private double totalPrice;
	private List<Long> productId;
	private Long productPrice;
	private String productName;
//	@JsonIgnore
//	private MultipartFile image;

	// Ensure that productId list is always initialized
	public List<Long> getProductId() {
		if (productId == null) {
			productId = new ArrayList<>();
		}
		return productId;
	}


}
