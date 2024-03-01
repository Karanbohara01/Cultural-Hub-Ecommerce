package com.example.reactbackend.controller;

import com.example.reactbackend.dto.FileUploadDTO;
import com.example.reactbackend.entity.Products;
import com.example.reactbackend.pojo.ProductsPojo;
import com.example.reactbackend.service.ProductsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/add-products")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductsController {

    private final ProductsService productsService;


    @PostMapping(value = "/save")
    public String addProducts(@RequestBody @ModelAttribute ProductsPojo productsPojo) throws IOException {
        productsService.save(productsPojo);
        return "Saved Successfully!";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestBody FileUploadDTO fileUploadDTO) {
        // Process the file content from fileUploadDTO.getFileContent()
        // ...
        return ResponseEntity.ok("File uploaded successfully");
    }


    @GetMapping("/getAll")
    public List<Products> getAll() {
        return this.productsService.getAll();


}
    @GetMapping("/getById/{id}")
    public Optional<Products> getById(@PathVariable("id") Long id) {
        return this.productsService.getById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.productsService.deleteById(id);
    }


    @PutMapping("/update/{id}")
    public String updateProduct(@PathVariable("id") Long id, @ModelAttribute @RequestBody ProductsPojo productsPojo) throws IOException {
        return this.productsService.update(id, productsPojo);
    }



}
