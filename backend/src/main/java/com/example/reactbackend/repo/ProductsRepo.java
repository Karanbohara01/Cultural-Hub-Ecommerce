package com.example.reactbackend.repo;

import com.example.reactbackend.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepo extends JpaRepository<Products, Long> {
}
