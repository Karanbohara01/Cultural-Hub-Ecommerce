package com.example.reactbackend.service;


import com.example.reactbackend.entity.FeaturedProducts;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service

public interface FeaturedProductsService {
    String save(FeaturedProductsPojo featuredProductsPojo) throws IOException;
    List<FeaturedProducts>getAll();
    void deleteById(Long id);
    Optional<FeaturedProducts> getById(Long id);
    String update(Long id, FeaturedProductsPojo featuredProductsPojo) throws IOException;
}
