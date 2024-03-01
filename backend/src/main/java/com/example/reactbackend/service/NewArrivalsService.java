package com.example.reactbackend.service;


import com.example.reactbackend.entity.FeaturedProducts;
import com.example.reactbackend.entity.NewArrivals;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import com.example.reactbackend.pojo.NewArrivalsPojo;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@Service

public interface NewArrivalsService {
    String save(NewArrivalsPojo newArrivalsPojo) throws IOException;
    List<NewArrivals>getAll();
    void deleteById(Long id);
    Optional<NewArrivals> getById(Long id);

    String update(Long id, FeaturedProductsPojo featuredProductsPojo);

    String update(Long id, NewArrivalsPojo newArrivalsPojo) throws IOException;
}
