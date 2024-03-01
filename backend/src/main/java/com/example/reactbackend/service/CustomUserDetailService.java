package com.example.reactbackend.service;

import com.example.reactbackend.repo.SystemUserRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final SystemUserRepo systemUserRepo;


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return (UserDetails) this.systemUserRepo.findByEmail(username).orElseThrow(() -> new EntityNotFoundException("User not found"));
    }
}
