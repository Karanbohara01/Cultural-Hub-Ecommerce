package com.example.reactbackend.service;


import com.example.reactbackend.entity.NewsLetter;
import com.example.reactbackend.pojo.NewsLetterPojo;

import java.util.List;
import java.util.Optional;


public interface NewsLetterService {

    String save(NewsLetterPojo newsLetterPojo);

    List<NewsLetter> getAll();

    void deleteById(Long id);

    String update(Long id, NewsLetterPojo newsLetterPojo);

    Optional<NewsLetter> getById(Long id);
}
