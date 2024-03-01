package com.example.reactbackend.repo;


import com.example.reactbackend.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<CartEntity, Integer> {

}
