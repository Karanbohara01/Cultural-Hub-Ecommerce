package com.example.reactbackend.controller;


import com.example.reactbackend.dto.CartDto;
import com.example.reactbackend.entity.CartEntity;
import com.example.reactbackend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;

	@PostMapping("/add-cart")
	public ResponseEntity<CartEntity> addItemToCart(@RequestBody CartDto cartDTO) {
		return new ResponseEntity<CartEntity>(cartService.addItemToCart(cartDTO),HttpStatus.OK);
	}

	@PutMapping("/update-cart")
	public ResponseEntity<CartEntity> updateItemToCart(@RequestParam int cartId, @RequestBody CartDto cartDTO) {
		return new ResponseEntity<CartEntity>(cartService.updateItemToCart(cartId,cartDTO),HttpStatus.OK);
	}

	@DeleteMapping("/delete-cart")
	public ResponseEntity<String> deleteItemFromCart(@RequestParam int cartId) {
		cartService.deleteItemFromCart(cartId);
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}

	@GetMapping("/get-cart-by-id")
	public ResponseEntity<CartEntity> getCartById(@RequestParam int cartId) {
		return new ResponseEntity<CartEntity>(cartService.getCartById(cartId),HttpStatus.OK);
	}
	@GetMapping("/getAll")
	public List<CartEntity> getAllCartItems() {
		return cartService.getAllCartItems();
	}
}
