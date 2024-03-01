package com.example.reactbackend.controller;


import com.example.reactbackend.entity.NewsLetter;
import com.example.reactbackend.pojo.NewsLetterPojo;
import com.example.reactbackend.service.NewsLetterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/user/news-letter")
@RequiredArgsConstructor

public class NewsLetterController {
    private final NewsLetterService newsLetterService;

//    @PostMapping("/save")
//    public String saveNewsLetter( @RequestBody NewsLetterPojo newsLetterPojo) {
//        return newsLetterService.save(newsLetterPojo);
//    }

    @PostMapping("/save")
    public ResponseEntity<String> saveNewsLetter(@RequestBody NewsLetterPojo newsLetterPojo) {
        try {
            String result = newsLetterService.save(newsLetterPojo);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving NewsLetter: " + e.getMessage());
        }
    }


    @GetMapping("/getAll")
    public List<NewsLetter> getAll() {
        return newsLetterService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<NewsLetter> getById(@PathVariable("id") Long id) {
        Optional<NewsLetter> newsLetter = newsLetterService.getById(id);
        return newsLetter.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
        newsLetterService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateNewsLetter(@PathVariable("id") Long id, @RequestBody NewsLetterPojo newsLetterPojo) {
        String result = newsLetterService.update(id, newsLetterPojo);
        return ResponseEntity.ok(result);
    }
}



