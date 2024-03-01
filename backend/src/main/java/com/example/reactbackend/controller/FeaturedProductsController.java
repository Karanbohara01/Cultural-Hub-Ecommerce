package com.example.reactbackend.controller;


import com.example.reactbackend.dto.FileUploadDTO;
import com.example.reactbackend.entity.FeaturedProducts;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import com.example.reactbackend.service.FeaturedProductsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/featured-products")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FeaturedProductsController {

    private final FeaturedProductsService featuredProductsService;


    @PostMapping(value = "/save")
    public String addFeaturedProducts(@RequestBody @ModelAttribute FeaturedProductsPojo featuredProductsPojo) throws IOException {
        featuredProductsService.save(featuredProductsPojo);
        return "Saved Successfully!";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestBody FileUploadDTO fileUploadDTO) {
        // Process the file content from fileUploadDTO.getFileContent()
        // ...
        return ResponseEntity.ok("File uploaded successfully");
    }


    @GetMapping("/getAll")
    public List<FeaturedProducts> getAll() {
        return this.featuredProductsService.getAll();


    }
    @GetMapping("/getById/{id}")
    public Optional<FeaturedProducts> getById(@PathVariable("id") Long id) {
        return this.featuredProductsService.getById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.featuredProductsService.deleteById(id);
    }


    @PutMapping("/update/{id}")
    public String updateFeaturedProduct(@PathVariable("id") Long id, @ModelAttribute @RequestBody FeaturedProductsPojo featuredProductsPojo) throws IOException {
        return this.featuredProductsService.update(id, featuredProductsPojo);
    }



}
