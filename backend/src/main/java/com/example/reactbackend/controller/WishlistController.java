//package com.example.reactbackend.controller;
//
//import com.example.reactbackend.entity.WishlistEntity;
//import com.example.reactbackend.service.WishlistService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:3000/")
//@RestController
//@RequestMapping("/wishlist")
//public class WishlistController {
//
//	@Autowired
//	private WishlistService wishlistService;
//
//
//	@PostMapping("/addWishlist")
//	public ResponseEntity<WishlistEntity> addWishlist(@RequestBody WishlistEntity wishlist) {
//			return new ResponseEntity<WishlistEntity>(wishlistService.addWishlist(wishlist) , HttpStatus.OK);
//	}
//
//	@DeleteMapping("deleteById/{id}")
//	public void deleteWishlistById(@PathVariable int id){
//		wishlistService.deleteWishlist(id);
//	}
//
//
//	@GetMapping("getWishlistById/{wishlistId}")
//	public ResponseEntity<WishlistEntity> getWishlistById (@PathVariable int wishlistId){
//	return new ResponseEntity<WishlistEntity>(wishlistService.getWishlistById(wishlistId),HttpStatus.OK);
//	}
//
//	@GetMapping("getAllWishlist")
//	public List<WishlistEntity> getAllWishlist(){
//		return wishlistService.getAllWishlist();
//	}
//
//
//}
