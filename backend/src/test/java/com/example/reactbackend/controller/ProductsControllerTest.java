package com.example.reactbackend.controller;

import com.example.reactbackend.entity.Products;
import com.example.reactbackend.pojo.ProductsPojo;
import com.example.reactbackend.repo.ProductsRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ProductsControllerTest {

    private MockMvc mockMvc;

    @Mock
    private ProductsRepo productsRepo;

    @InjectMocks
    private ProductsController productsController;

    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(productsController).build();
        this.objectMapper = new ObjectMapper();
    }

    @Test
    public void testAddProduct_success() throws Exception {
        // Given
        Products product = new Products();
        product.setProductName("Product1");
        product.setProductPrice(2000);
        product.setProductDescription("productDescription");
        product.setBrandName("brand1");
        product.setImage(null);

        Mockito.when(productsRepo.save(Mockito.any(Products.class))).thenReturn(product);

        // When
        mockMvc.perform(post("/products/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(product)))
                // Then
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.productName").value("Product1"))
                .andExpect(jsonPath("$.productPrice").value(2000))
                .andExpect(jsonPath("$.productDescription").value("productDescription"))
                .andExpect(jsonPath("$.brandName").value("brand1"))
                .andExpect(jsonPath("$.image").isEmpty());
    }
}
