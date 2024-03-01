package com.example.reactbackend.service.impl;

import com.example.reactbackend.entity.SystemUser;
import com.example.reactbackend.repo.SystemUserRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

public class SystemUserServiceImplTest {


    @DataJpaTest
    @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    public class UserServiceImplTest {

        @Autowired
        private SystemUserRepo systemUserRepo;

        @Test
        @Order(1)
        @Transactional
        @Rollback(value = false)
        public void registerUser() {
            SystemUser systemUser = SystemUser.builder()
                    .username("Test")
                    .userId(null)
                    .email("karan@gmail.com")
                    .password("test")
                    .role("USER")

                    .build();
            systemUserRepo.save(systemUser);

            Assertions.assertThat(systemUser.getUserId()).isGreaterThan(0);
        }

        @Test
        @Order(2)
        @Transactional
        void getByEmail() {
            String email = "karan@gmail.com"; // Corrected email to match the registered user
            SystemUser systemUser = systemUserRepo.findByEmail(email).orElse(null);
            Assertions.assertThat(systemUser).isNotNull();
            Assertions.assertThat(systemUser.getEmail()).isEqualTo(email);
        }
    }
}

