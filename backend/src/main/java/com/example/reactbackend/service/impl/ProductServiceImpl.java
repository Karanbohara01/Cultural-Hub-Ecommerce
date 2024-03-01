//package com.example.reactbackend.service.impl;
//
//
//import com.example.reactbackend.entity.FeaturedProducts;
//import com.example.reactbackend.entity.ProductEntity;
//import com.example.reactbackend.entity.Products;
//
//import com.example.reactbackend.pojo.FeaturedProductsPojo;
//import com.example.reactbackend.pojo.ProductsPojo;
//import com.example.reactbackend.repo.ProductsRepo;
//import com.example.reactbackend.service.FeaturedProductsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.util.List;
//import java.util.Optional;
//
//
//@Service
//public class ProductServiceImpl implements FeaturedProductsService {
//	@Autowired
//	private ProductsRepo productsRepo;
//	@Override
//	public String addProduct(FeaturedProducts featuredProducts) {
//		// TODO Auto-generated method stub
//		Products products = new Products();
//		products.setProductName(products.getProductName());
//		products.setProductDescription(products.getProductDescription());
//		products.setImage(products.getImage());
//		products.setProductPrice(products.getProductPrice());
//		productsRepo.save(products);
//		return "Product added successfully";
//	}
//	@Override
//	public String deleteProduct(Long productId) {
//		// TODO Auto-generated method stub
//		productsRepo.deleteById(productId);
//		return "Product deleted successfully";
//	}
//	@Override
//	public List<Products> getAllProducts() {
//		return productsRepo.findAll();
//	}
//
//	@Override
//	public String save(FeaturedProductsPojo featuredProductsPojo) throws IOException {
//		return null;
//	}
//
//	@Override
//	public List<FeaturedProducts> getAll() {
//		return null;
//	}
//
//	@Override
//	public void deleteById(Long id) {
//
//	}
//
//	//	@Override
////	public List<ProductEntity> getProductByCategory(Category category) {
////		// TODO Auto-generated method stub
////		 return productsRepo.findByCategory(category);
////
////	}
//	@Override
//	public Products getById(Long productId) {
//		// TODO Auto-generated method stub
//		return productsRepo.findById(productId).orElseThrow();
//	}
//
//	@Override
//	public String update(Long id, FeaturedProductsPojo featuredProductsPojo) {
//		return null;
//	}
//
//	@Override
//	public String updateProduct(ProductsPojo products , Long productId) {
//		Optional<Products> optionalProduct = productsRepo.findById(productId);
//        if (optionalProduct.isPresent()) {
//            Products product = optionalProduct.get();
//            // Update the fields of the product with the values from the DTO
//            products.setProductId(products.getProductId());
//            products.setProductName(products.getProductName());
//            products.setProductDescription((products.getProductDescription()));
////            product.setCategory(products.getCategory());
//            products.setImage(products.getImage());
//            products.setProductPrice(products.getProductPrice());
//            // Save the updated product
//            productsRepo.save(products);
//            return "Product updated successfully.";
//        } else {
//            return "Product not found.";
//        }
//
//
//
//
//
//	}
//
//}
