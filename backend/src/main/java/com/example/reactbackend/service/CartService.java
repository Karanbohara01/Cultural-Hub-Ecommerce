package com.example.reactbackend.service;



import com.example.reactbackend.dto.CartDto;
import com.example.reactbackend.entity.CartEntity;

import java.util.List;

public interface CartService {

	CartEntity addItemToCart(CartDto cartDTO );

	CartEntity updateItemToCart(int cartId, CartDto cartDTO);

	String deleteItemFromCart(int cartId);

	CartEntity getCartById(int cartId);

	List<CartEntity> getAllCartItems();


}
