package com.example.reactbackend.repo;


import com.example.reactbackend.entity.NewArrivals;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewArrivalsRepo extends JpaRepository<NewArrivals,Long> {
}
