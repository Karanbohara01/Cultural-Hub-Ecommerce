package com.example.reactbackend.service.impl;

import com.example.reactbackend.dto.CartDto;
import com.example.reactbackend.entity.CartEntity;
import com.example.reactbackend.entity.Products;
import com.example.reactbackend.exceptions.CartNotFoundException;
import com.example.reactbackend.repo.CartRepo;
import com.example.reactbackend.repo.ProductsRepo;
import com.example.reactbackend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepo cartRepo;

	@Autowired
	private ProductsRepo productsRepo;

		@Override
		public CartEntity addItemToCart(CartDto cartDTO) {
			List<Products> productsList = new ArrayList<>();
			for (Long productId : cartDTO.getProductId()) {
				Optional<Products> optionalProduct = productsRepo.findById((long) productId);
				if (optionalProduct.isPresent()) {
					productsList.add(optionalProduct.get());
				} else {
					throw new CartNotFoundException("Product doesn't exist with id: " + productId);
				}
			}

			CartEntity cartEntity = new CartEntity();
			cartEntity.setProductCount(cartDTO.getProductCount());
			cartEntity.setProducts(productsList); // Assuming productsList is a list of products
			cartEntity.setBrandName(cartDTO.getBrandName()); // Assuming getBrandName() is a method in CartDto
			cartEntity.setProductPrice(cartDTO.getProductPrice()); // Assuming getBrandName() is a method in CartDto
			cartEntity.setTotalPrice(cartDTO.getTotalPrice());
			cartEntity.setProductName(cartDTO.getProductName());



			try {
				cartEntity = cartRepo.save(cartEntity);
				return cartEntity;
			} catch (Exception e) {
				throw new CartNotFoundException("Something went wrong while adding item to cart");
			}
		}

		@Override
		public CartEntity updateItemToCart(int cartId, CartDto cartDTO) {
			Optional<CartEntity> optionalCart = cartRepo.findById(cartId);
			if (optionalCart.isPresent()) {
				List<Products> productEntityList = new ArrayList<>();
				for (Long productId : cartDTO.getProductId()) {
					Optional<Products> optionalProduct = productsRepo.findById((long) productId);
					if (optionalProduct.isPresent()) {
						productEntityList.add(optionalProduct.get());
					} else {
						throw new CartNotFoundException("Product doesn't exist with id: " + productId);
					}
				}

				CartEntity cartEntity = optionalCart.get();
				cartEntity.setProductCount(cartDTO.getProductCount());
				List<Products> productsList = null;
				cartEntity.setProducts(productsList);
				cartEntity.setTotalPrice(cartDTO.getTotalPrice());

				try {
					cartEntity = cartRepo.save(cartEntity);
					return cartEntity;
				} catch (Exception e) {
					throw new CartNotFoundException("Something went wrong while updating item in cart");
				}
			} else {
				throw new CartNotFoundException("Cart doesn't exist with id: " + cartId);
			}
		}


	@Override
	public String deleteItemFromCart(int cartId) {
	cartRepo.findById(cartId).orElseThrow(()->new CartNotFoundException("Cart not found"));
	cartRepo.deleteById(cartId);
	return "Deleted successfully";
	}


	@Override
	public CartEntity getCartById(int cartId) {
		return  cartRepo.findById(cartId).orElseThrow(()->new CartNotFoundException("Cart Not Found with given id"));
	}

	@Override
	public List<CartEntity> getAllCartItems() {
		return cartRepo.findAll();

	}

}
