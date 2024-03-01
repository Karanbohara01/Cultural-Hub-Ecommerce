package com.example.reactbackend.repo;

import com.example.reactbackend.entity.FeaturedProducts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeaturedProductsRepo extends JpaRepository<FeaturedProducts,Long> {
}
