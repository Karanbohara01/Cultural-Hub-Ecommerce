//package com.example.reactbackend.controller;
//
//
//import com.example.reactbackend.entity.ProductEntity;
//import com.example.reactbackend.entity.Products;
//import com.example.reactbackend.enums.Category;
//import com.example.reactbackend.service.ProductService;
//import com.example.reactbackend.service.ProductsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//
//@CrossOrigin("http://localhost:3000")
//@RestController
//@RequestMapping("/product")
//public class ProductController {
//	@Autowired
//	private ProductsService productsService;
//	@CrossOrigin
//	@PostMapping("/add")
//	public String addProduct(@RequestBody Products products) {
//		return productsService.addProduct(products);
//	}
//	@CrossOrigin
//	@DeleteMapping("/delete/{productId}")
//	public String deleteProduct(@PathVariable Long productId) {
//		return productsService.deleteProduct(productId);
//	}
//	@CrossOrigin
//	@GetMapping("getallproducts")
//	public List<ProductEntity> getAllProducts(){
//		return productsService.getAllProducts();
//	}
//	@CrossOrigin
////	@GetMapping("{category}")
////	public List<ProductEntity> getProductByCategory(@PathVariable Category category){
////		return productsService.getProductByCategory(category);
////	}
//	@CrossOrigin
//	@PutMapping("/update/{productId}")
//	 public ResponseEntity<String> updateProduct(@RequestBody ProductDto productDto, @PathVariable("productId") int productId) {
//        String message = productService.updateProduct(productDto, productId);
//        HttpStatus status = message.equals("Product updated successfully.") ? HttpStatus.OK : HttpStatus.NOT_FOUND;
//        return ResponseEntity.status(status).body(message);
//    }
//	@GetMapping("/getbyid/{productId}")
//	public ProductEntity getById(@PathVariable int productId) {
//		return productService.getById(productId);
//	}
//}
