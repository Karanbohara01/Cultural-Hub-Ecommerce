package com.example.reactbackend.service.impl;

import com.example.reactbackend.entity.FeaturedProducts;
import com.example.reactbackend.pojo.FeaturedProductsPojo;
import com.example.reactbackend.repo.FeaturedProductsRepo;
import com.example.reactbackend.service.FeaturedProductsService;
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
public class FeaturedProductsServiceImpl implements FeaturedProductsService {
    private final FeaturedProductsRepo featuredProductsRepo;
    ImageToBase64 imageToBase64 = new ImageToBase64();

    @Override
    public String save(FeaturedProductsPojo featuredProductsPojo) throws IOException {
        FeaturedProducts featuredProducts;
        if (featuredProductsPojo.getProductId() != null) {
            featuredProducts = featuredProductsRepo.findById(featuredProductsPojo.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + featuredProductsPojo.getProductId()));
        } else {
            featuredProducts = new FeaturedProducts();
            featuredProducts.setProductName(featuredProductsPojo.getProductName());
            featuredProducts.setBrandName(featuredProductsPojo.getBrandName());
            featuredProducts.setStatus(featuredProductsPojo.getStatus());
            featuredProducts.setDiscount(featuredProductsPojo.getDiscount());
        }

        if (featuredProductsPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", featuredProductsPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, featuredProductsPojo.getImage().getBytes());
            featuredProducts.setImage(featuredProductsPojo.getImage().getOriginalFilename());
        }

        featuredProductsRepo.save(featuredProducts);
        return "Saved Successfully";
    }

    @Override
    public List<FeaturedProducts> getAll() {
        return featuredProductsRepo.findAll().stream().map(item -> {
            item.setImage(imageToBase64.getImageBase64(item.getImage()));
            return item;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        featuredProductsRepo.deleteById(id);
    }

    @Override
    public Optional<FeaturedProducts> getById(Long id) {
        return featuredProductsRepo.findById(id);
    }

    @Override
    public String update(Long id, FeaturedProductsPojo featuredProductsPojo) throws IOException {
        Optional<FeaturedProducts> optionalFeaturedProducts = featuredProductsRepo.findById(id);
        if (optionalFeaturedProducts.isPresent()) {
            FeaturedProducts existingFeaturedProducts = optionalFeaturedProducts.get();

            if (featuredProductsPojo.getDiscount() != null) {
                existingFeaturedProducts.setDiscount(featuredProductsPojo.getDiscount());
            }

            if (featuredProductsPojo.getProductName() != null) {
                existingFeaturedProducts.setProductName(featuredProductsPojo.getProductName());
            }

            if (featuredProductsPojo.getBrandName() != null) {
                existingFeaturedProducts.setBrandName(featuredProductsPojo.getBrandName());
            }

            if (featuredProductsPojo.getStatus() != null) {
                existingFeaturedProducts.setStatus(featuredProductsPojo.getStatus());
            }

//            if (featuredProductsPojo.getImage() != null) {
//                Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", featuredProductsPojo.getImage().getOriginalFilename());
//                Files.write(fileNameAndPath, featuredProductsPojo.getImage().getBytes());
//            }
//            existingFeaturedProducts.setImage(featuredProductsPojo.getImage().getOriginalFilename());
//


            featuredProductsRepo.save(existingFeaturedProducts);
            return "Products updated Successfully.";
        } else {
            throw new EntityNotFoundException("Product not found with Id " + id);
        }
    }
}
