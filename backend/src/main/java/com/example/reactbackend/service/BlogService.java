package com.example.reactbackend.service;



import com.example.reactbackend.entity.Blog;
import com.example.reactbackend.pojo.BlogPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service

public interface BlogService {
    String save(BlogPojo blogPojo) throws IOException;
    List<Blog>getAll();
    void deleteById(Long id);
    Optional<Blog> getById(Long id);

}
