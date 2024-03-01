package com.example.reactbackend.controller;

import com.example.reactbackend.dto.FileUploadDTO;

import com.example.reactbackend.entity.Blog;
import com.example.reactbackend.pojo.BlogPojo;
import com.example.reactbackend.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user/blog")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BlogController {

    private final BlogService blogService;


    @PostMapping(value = "/save")
    public String addBlog(@RequestBody @ModelAttribute BlogPojo blogPojo) throws IOException {
        blogPojo.setDate(LocalDate.now());

        blogService.save(blogPojo);
        return "Saved Successfully!";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestBody FileUploadDTO fileUploadDTO) {
        // Process the file content from fileUploadDTO.getFileContent()
        // ...
        return ResponseEntity.ok("File uploaded successfully");
    }


    @GetMapping("/getAll")
    public List<Blog> getAll() {
        return this.blogService.getAll();


    }
    @GetMapping("/getById/{id}")
    public Optional<Blog> getById(@PathVariable("id") Long id) {
        return this.blogService.getById(id);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.blogService.deleteById(id);
    }


//    @PutMapping("/update/{id}")
//    public String updateBlog(@PathVariable("id") Long id, @Valid @RequestBody BlogPojo blogPojo) {
//        return this.blogService.update(id, blogPojo);
//    }



}
