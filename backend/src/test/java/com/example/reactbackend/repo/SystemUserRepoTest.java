package com.example.reactbackend.repo;


import com.example.reactbackend.entity.SystemUser;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

public class SystemUserRepoTest {


    @DataJpaTest
    @TestMethodOrder(MethodOrderer.OrderAnnotation.class)
    public class UserRepoTest {

        @Autowired
        private SystemUserRepo systemUserRepo;

        //    JUnit to save user
        @Test
        @Order(1)
        @Rollback(value = false)

        public void saveUserTest() {
            SystemUser user = SystemUser.builder()
                    .userId(null)
                    .username("User")
                    .email("u@gmail.com")
                    .password("123")
                    .role("USER")
                    .build();
            systemUserRepo.save(user);

            Assertions.assertThat(user.getUserId()).isGreaterThan(0);
        }

        //    JUnit to find user by email
        @Test
        @Order(2)
        public void findByEmailTest() {
            String email = "u@gmail.com";
            SystemUser systemUser = systemUserRepo.findByEmail(email).get();
            Assertions.assertThat(systemUser.getEmail()).isEqualTo("u@gmail.com");

        }

        //    JUnit to delete user
        @Test
        @Order(3)
        @Rollback(value = false)
        public void deleteUserTest() {
            String email = "u@gmail.com";
            SystemUser systemUser = systemUserRepo.findByEmail(email).get();
            systemUserRepo.delete(systemUser);

            SystemUser systemUser1= null;

            Optional<SystemUser> optionalUser = systemUserRepo.findByEmail(email);

            if (optionalUser.isPresent()) {
                systemUser1 = optionalUser.get();
            }

            Assertions.assertThat(systemUser1).isNull();
        }
    }
}
