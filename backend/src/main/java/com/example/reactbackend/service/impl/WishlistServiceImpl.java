//package com.example.reactbackend.service.impl;
//
//import com.example.reactbackend.entity.WishlistEntity;
//import com.example.reactbackend.exceptions.WishlistNotExistsException;
//import com.example.reactbackend.repo.ProductRepo;
//import com.example.reactbackend.repo.WishlistRepo;
//import com.example.reactbackend.service.WishlistService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class WishlistServiceImpl implements WishlistService {
//
//	@Autowired
//	private WishlistRepo wishlistRepo;
//
//	@Autowired
//	private ProductRepo productRepo;
//
//	@Override
//	public WishlistEntity addWishlist(WishlistEntity wishlist) {
//		return wishlistRepo.save(wishlist);
//	}
//
//	@Override
//	public String deleteWishlist(int wishlistId) {
//		wishlistRepo.deleteById(wishlistId);
//		return "Wishlist deleted successfully";
//
//	}
//
//
//
//	@Override
//	public List<WishlistEntity> getAllWishlist() {
//
//		return wishlistRepo.findAll();
//	}
//
//	@Override
//	public WishlistEntity getWishlistById(int wishlistId) {
//		return wishlistRepo.findById(wishlistId).orElseThrow(()-> new WishlistNotExistsException("Wishlist not found with given Id"));
//	}
//
//
//
//
//}
