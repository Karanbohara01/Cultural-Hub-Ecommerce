package com.example.reactbackend.service.impl;


import com.example.reactbackend.entity.NewArrivals;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import com.example.reactbackend.pojo.NewArrivalsPojo;

import com.example.reactbackend.repo.NewArrivalsRepo;

import com.example.reactbackend.service.NewArrivalsService;
import com.example.reactbackend.utils.ImageToBase64;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewArrivalsServiceImpl implements NewArrivalsService {
    private final NewArrivalsRepo newArrivalsRepo;
    ImageToBase64 imageToBase64 = new ImageToBase64();

    @Override
    public String save(NewArrivalsPojo newArrivalsPojo) throws IOException {
        NewArrivals newArrivals;
        if (newArrivalsPojo.getProductId() != null) {
            newArrivals = newArrivalsRepo.findById(newArrivalsPojo.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + newArrivalsPojo.getProductId()));
        } else {
            newArrivals = new NewArrivals();
            newArrivals.setProductName(newArrivalsPojo.getProductName());
            newArrivals.setBrandName(newArrivalsPojo.getBrandName());
            newArrivals.setStatus(newArrivalsPojo.getStatus());
            newArrivals.setDiscount(newArrivalsPojo.getDiscount());
        }

        if (newArrivalsPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", newArrivalsPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, newArrivalsPojo.getImage().getBytes());
            newArrivals.setImage(newArrivalsPojo.getImage().getOriginalFilename());
        }

        newArrivalsRepo.save(newArrivals);
        return "Saved Successfully";
    }



    @Override
    public List<NewArrivals> getAll() {
        return newArrivalsRepo.findAll().stream().map(item -> {
            item.setImage(imageToBase64.getImageBase64(item.getImage()));
            return item;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        newArrivalsRepo.deleteById(id);
    }

    @Override
    public Optional<NewArrivals> getById(Long id) {
        return newArrivalsRepo.findById(id);
    }

    @Override
    public String update(Long id, FeaturedProductsPojo featuredProductsPojo) {
        return null;
    }

    @Override
    public String update(Long id, NewArrivalsPojo newArrivalsPojo) throws IOException {
        Optional<NewArrivals> optionalNewArrivals = newArrivalsRepo.findById(id);
        if (optionalNewArrivals.isPresent()) {
            NewArrivals existingNewArrivals = optionalNewArrivals.get();

            if (newArrivalsPojo.getDiscount() != null) {
                existingNewArrivals.setDiscount(newArrivalsPojo.getDiscount());
            }

            if (newArrivalsPojo.getProductName() != null) {
                existingNewArrivals.setProductName(newArrivalsPojo.getProductName());
            }

            if (newArrivalsPojo.getBrandName() != null) {
                existingNewArrivals.setBrandName(newArrivalsPojo.getBrandName());
            }

            if (newArrivalsPojo.getStatus() != null) {
                existingNewArrivals.setStatus(newArrivalsPojo.getStatus());
            }
            if (newArrivalsPojo.getImage() != null) {
                Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", newArrivalsPojo.getImage().getOriginalFilename());
                Files.write(fileNameAndPath, newArrivalsPojo.getImage().getBytes());
            }
            existingNewArrivals.setImage(newArrivalsPojo.getImage().getOriginalFilename());

            newArrivalsRepo.save(existingNewArrivals);
            return "Products updated Successfully.";
        } else {
            throw new EntityNotFoundException("Product not found with Id " + id);
        }
    }
}
