package com.example.reactbackend.repo;


import com.example.reactbackend.entity.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SystemUserRepo extends JpaRepository<SystemUser, Long> {

    Optional<SystemUser> findByEmail(String email);


}
