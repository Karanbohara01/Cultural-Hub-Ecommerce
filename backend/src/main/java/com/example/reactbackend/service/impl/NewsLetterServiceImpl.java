package com.example.reactbackend.service.impl;


import com.example.reactbackend.entity.NewsLetter;
import com.example.reactbackend.pojo.NewsLetterPojo;
import com.example.reactbackend.repo.NewsLetterRepo;
import com.example.reactbackend.service.NewsLetterService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class NewsLetterServiceImpl implements NewsLetterService {
    private final NewsLetterRepo newsLetterRepo;

    public NewsLetterServiceImpl(NewsLetterRepo newsLetterRepo) {
        this.newsLetterRepo = newsLetterRepo;
    }

    @Override
    public String save(NewsLetterPojo newsLetterPojo) {
        NewsLetter newsLetter;
        if (newsLetterPojo.getNewsLetterId() != null) {
            newsLetter = newsLetterRepo.findById(newsLetterPojo.getNewsLetterId())
                    .orElseThrow(() -> new EntityNotFoundException("NewsLetter not found with ID: " + newsLetterPojo.getNewsLetterId()));
        } else {
            newsLetter = new NewsLetter();
        }



        newsLetter.setEmail(newsLetterPojo.getEmail());

        newsLetterRepo.save(newsLetter);

        return "News Letter saved successfully";
    }

    @Override
    public List<NewsLetter> getAll() {
        return newsLetterRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        newsLetterRepo.deleteById(id);
    }

    @Override
    public String update(Long id, NewsLetterPojo newsLetterPojo) {
        Optional<NewsLetter> optionalNewsLetter = newsLetterRepo.findById(id);
        if (optionalNewsLetter.isPresent()) {
            NewsLetter existingNewsLetter = optionalNewsLetter.get();

            existingNewsLetter.setEmail(newsLetterPojo.getEmail());

            newsLetterRepo.save(existingNewsLetter);
            return "NewsLetter updated successfully";
        } else {
            throw new EntityNotFoundException("News Letter not found with ID: " + id);
        }
    }

    @Override
    public Optional<NewsLetter> getById(Long id) {
        return newsLetterRepo.findById(id);
    }
}
