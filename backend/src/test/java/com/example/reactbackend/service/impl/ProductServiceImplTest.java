package com.example.reactbackend.service.impl;

import com.example.reactbackend.entity.Products;
import com.example.reactbackend.service.ProductsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ProductServiceImplTest {

    @Autowired
    private ProductsService productsService;

    @MockBean
    private ProductsService productsServiceMock;

    @BeforeEach
    void setUp() {
        Products product = new Products();
        product.setProductName("test");
        product.setBrandName("test");
        product.setProductDescription("test");
        product.setProductId(1L); // Assuming product id is a Long
        product.setProductPrice(1000);
        product.setImage(null);

        Mockito.when(productsServiceMock.getById(1L)).thenReturn(java.util.Optional.of(product));
    }

    @Test
    void getById() {
        String name = "test";
        assertEquals(name, productsService.getById(1L).get().getProductName());
    }

    @Test
    void deleteItem() {
        productsService.deleteById(1L);
        Mockito.verify(productsServiceMock, Mockito.times(1)).deleteById(1L);
    }
}
