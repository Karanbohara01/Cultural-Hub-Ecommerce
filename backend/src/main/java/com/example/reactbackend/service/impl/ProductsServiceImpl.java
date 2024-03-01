package com.example.reactbackend.service.impl;
import com.example.reactbackend.entity.Products;
import com.example.reactbackend.pojo.ProductsPojo;
import com.example.reactbackend.repo.ProductsRepo;
import com.example.reactbackend.service.ProductsService;
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
public class ProductsServiceImpl implements ProductsService {
    private final ProductsRepo productsRepo;
    ImageToBase64 imageToBase64 = new ImageToBase64();

    @Override
    public String save(ProductsPojo productsPojo) throws IOException {
        Products products;
        if (productsPojo.getProductId() != null) {
            products = productsRepo.findById(productsPojo.getProductId())
                    .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + productsPojo.getProductId()));
        } else {
            products = new Products();
        }
        products.setProductName(productsPojo.getProductName());
        products.setBrandName(productsPojo.getBrandName());
        products.setProductPrice(productsPojo.getProductPrice());
        products.setProductDescription(productsPojo.getProductDescription());

        if (productsPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", productsPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, productsPojo.getImage().getBytes());
        }
        products.setImage(productsPojo.getImage().getOriginalFilename());
        productsRepo.save(products);
        return "Saved Successfully";
    }

    @Override
    public List<Products> getAll() {
        return productsRepo.findAll().stream().map(item -> {
            item.setImage(imageToBase64.getImageBase64(item.getImage()));
            return item;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        productsRepo.deleteById(id);
    }

    @Override
    public Optional<Products> getById(Long id) {
        return productsRepo.findById(id);
    }


    @Override
    public String update(Long id, ProductsPojo productsPojo) throws IOException {

        Products existingProducts = productsRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + productsPojo.getProductId()));

        existingProducts.setProductName(productsPojo.getProductName());
        existingProducts.setBrandName(productsPojo.getBrandName());
        existingProducts.setProductPrice(productsPojo.getProductPrice());
        existingProducts.setProductDescription(productsPojo.getProductDescription());

//        if (productsPojo.getImage() != null) {
//            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", productsPojo.getImage().getOriginalFilename());
//            Files.write(fileNameAndPath, productsPojo.getImage().getBytes());
//        }
//        existingProducts.setImage(productsPojo.getImage().getOriginalFilename());
        productsRepo.save(existingProducts);

//        Products existingProducts = productsRepo.findById(id)
//                .orElseThrow(() -> new com.example.reactbackend.service.impl.EntityNotFoundException("Product Error" + id));
//
//        existingProducts.setProductName(productsPojo.getProductName());
//        existingProducts.setProductPrice(productsPojo.getProductPrice());
//        existingProducts.setProductDescription(productsPojo.getProductDescription());


//        Optional<Products> optionalProducts = productsRepo.findById(id);
//        if (optionalProducts.isPresent()) {
//            Products existingProducts = optionalProducts.get();
//
//            // Check if product price is not null before setting it
//            if (productsPojo.getProductPrice() != null) {
//                existingProducts.setProductPrice(productsPojo.getProductPrice());
//            }
//
//            if (productsPojo.getProductName() != null) {
//                existingProducts.setProductName(productsPojo.getProductName());
//            }
//
//            if (productsPojo.getProductDescription() != null) {
//                existingProducts.setProductDescription(productsPojo.getProductDescription());
//            }
//
//            if (productsPojo.getBrandName() != null) {
//                existingProducts.setBrandName(productsPojo.getBrandName());
//            }

//            if (productsPojo.getImage() != null) {
//                Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", productsPojo.getImage().getOriginalFilename());
//                Files.write(fileNameAndPath, productsPojo.getImage().getBytes());
//            }
//            existingProducts.setImage(productsPojo.getImage().getOriginalFilename());


        return "Products updated from server";
//        } else {
//            throw new EntityNotFoundException("Product not found with Id " + id);
//        }
    }
}

//
//
//    @Override
//    public String update(Long id, ProductsPojo productsPojo) {
//        Products existingProducts = productsRepo.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + id));
//        existingProducts.setProductName(productsPojo.getProductName());
//        existingProducts.setProductPrice(productsPojo.getProductPrice());
//        existingProducts.setBrandName(productsPojo.getBrandName());
//        existingProducts.setProductDescription(productsPojo.getProductDescription());
//        productsRepo.save(existingProducts);
//        return "Updated Successfully";
//    }
//}
//
//    @Override
//    public String update(Long id, ProductsPojo productsPojo) {
//        Products existingProducts = productsRepo.findById(id)
//                .orElseThrow(() -> new EntityNotFoundException("Product not found with ID " + id));
//
//        // Check if brandName is not null before setting it
//        if (productsPojo.getBrandName() != null) {
//            existingProducts.setBrandName(productsPojo.getBrandName());
//        }
//
//        if (productsPojo.getProductDescription() != null) {
//            existingProducts.setProductDescription(productsPojo.getProductDescription());
//        }
//
//        if (productsPojo.getProductName() != null) {
//            existingProducts.setProductName(productsPojo.getProductName());
//        }
//
//        // Check if productPrice is not null before setting it
//        if (productsPojo.getProductPrice() != null) {
//            existingProducts.setProductPrice(productsPojo.getProductPrice());
//        }
//
//        // Check if image is not null before updating it
//        if (productsPojo.getImage() != null) {
//            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", productsPojo.getImage().getOriginalFilename());
//            try {
//                Files.write(fileNameAndPath, productsPojo.getImage().getBytes());
//                existingProducts.setImage(productsPojo.getImage().getOriginalFilename());
//                // Log success or any additional information
//                System.out.println("Image file successfully written and path updated.");
//            } catch (IOException e) {
//                // Handle IOException
//                e.printStackTrace();
//                // Log error
//                System.err.println("Error writing image file: " + e.getMessage());
//            }
//        }
//
//        productsRepo.save(existingProducts);
//        return "Updated Successfully";
//    }
//}
//    }
//}
