package com.example.reactbackend.repo;

import com.example.reactbackend.entity.NewsLetter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsLetterRepo extends JpaRepository<NewsLetter,Long> {
}
