package com.example.reactbackend.exceptions;

public class ProductNotFoundException  extends RuntimeException{

	public ProductNotFoundException(String message) {
		super(message);
	}
	

}
