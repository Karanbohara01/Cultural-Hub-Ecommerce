package com.example.reactbackend.service;

import com.example.reactbackend.entity.Products;
import com.example.reactbackend.pojo.ProductsPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service

public interface ProductsService {
    String save(ProductsPojo productsPojo) throws IOException;
    List<Products>getAll();
    void deleteById(Long id);
    Optional<Products> getById(Long id);
    String update(Long id, ProductsPojo productsPojo) throws IOException;
}
