package com.example.reactbackend.controller;


import com.example.reactbackend.dto.FileUploadDTO;
import com.example.reactbackend.entity.FeaturedProducts;
import com.example.reactbackend.entity.NewArrivals;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import com.example.reactbackend.pojo.NewArrivalsPojo;
import com.example.reactbackend.service.FeaturedProductsService;
import com.example.reactbackend.service.NewArrivalsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/new-arrivals")
@RequiredArgsConstructor
@CrossOrigin("*")
public class NewArrivalsController {

    private final NewArrivalsService newArrivalsService;


    @PostMapping(value = "/save")
    public String addFeaturedProducts(@RequestBody @ModelAttribute NewArrivalsPojo newArrivalsPojo) throws IOException {
        newArrivalsService.save(newArrivalsPojo);
        return "Saved Successfully!";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestBody FileUploadDTO fileUploadDTO) {
        // Process the file content from fileUploadDTO.getFileContent()
        // ...
        return ResponseEntity.ok("File uploaded successfully");
    }


    @GetMapping("/getAll")
    public List<NewArrivals> getAll() {
        return this.newArrivalsService.getAll();


    }
    @GetMapping("/getById/{id}")
    public Optional<NewArrivals> getById(@PathVariable("id") Long id) {
        return this.newArrivalsService.getById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.newArrivalsService.deleteById(id);
    }


    @PutMapping("/update/{id}")
    public String updateNewArrivals(@PathVariable("id") Long id, @ModelAttribute @RequestBody NewArrivalsPojo newArrivalsPojo) throws IOException {
        return this.newArrivalsService.update(id, newArrivalsPojo);
    }



}
