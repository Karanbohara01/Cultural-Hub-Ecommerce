package com.example.reactbackend.service.impl;
import com.example.reactbackend.entity.Blog;
import com.example.reactbackend.pojo.BlogPojo;
import com.example.reactbackend.repo.BlogRepo;
import com.example.reactbackend.service.BlogService;
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
public class BlogServiceImpl implements BlogService {
    private final BlogRepo blogRepo;
    ImageToBase64 imageToBase64 = new ImageToBase64();

    @Override
    public String save(BlogPojo blogPojo) throws IOException {
        Blog blog;
        if (blogPojo.getBlogId() != null) {
            blog = blogRepo.findById(blogPojo.getBlogId())
                    .orElseThrow(() -> new EntityNotFoundException("Blog not found with ID " + blogPojo.getBlogId()));
        } else {
            blog = new Blog();
        }
        blog.setBlogs(blogPojo.getBlogs());
        blog.setName(blogPojo.getName());
        blog.setDate(blogPojo.getDate());

        if (blogPojo.getImage() != null) {
            Path fileNameAndPath = Paths.get("C:\\Users\\Acer\\OneDrive\\Desktop\\app/file/", blogPojo.getImage().getOriginalFilename());
            Files.write(fileNameAndPath, blogPojo.getImage().getBytes());
        }
        blog.setImage(blogPojo.getImage().getOriginalFilename());
        blogRepo.save(blog);
        return "Saved Successfully";
    }

    @Override
    public List<Blog> getAll() {
        return blogRepo.findAll().stream().map(item -> {
            item.setImage(imageToBase64.getImageBase64(item.getImage()));
            return item;
        }).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        blogRepo.deleteById(id);
    }

    @Override
    public Optional<Blog> getById(Long id) {
        return blogRepo.findById(id);
    }


//    @Override
//    public String update(Long id, ProductsPojo productsPojo) {
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
//
//
//
//            productsRepo.save(existingProducts);
//            return "Products updated Successfully.";
//        } else {
//            throw new EntityNotFoundException("Product not found with Id " + id);
//        }
//    }
}


