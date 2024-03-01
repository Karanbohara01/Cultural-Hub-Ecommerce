package com.example.reactbackend.service.impl;


import com.example.reactbackend.config.PasswordEncoderUtil;
import com.example.reactbackend.entity.SystemUser;
import com.example.reactbackend.pojo.NewPasswordPojo;
import com.example.reactbackend.pojo.SystemUserPojo;
import com.example.reactbackend.repo.SystemUserRepo;
import com.example.reactbackend.security.JwtService;
import com.example.reactbackend.service.SystemUserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SystemUserServiceImpl implements SystemUserService {

    private final SystemUserRepo systemUserRepo;
    private final JwtService jwtService;


    @Override
    public String save(SystemUserPojo systemUserPojo) {
        SystemUser systemUser;

        try {

        if (systemUserPojo.getUserId() != null) {
            systemUser = systemUserRepo.findById(systemUserPojo.getUserId())
                    .orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + systemUserPojo.getUserId()));
        } else {
            systemUser = new SystemUser();
        }

        // Set values from SystemUserPojo to SystemUser entity
        systemUser.setUsername(systemUserPojo.getUsername());
        systemUser.setRole("User");
        systemUser.setEmail(systemUserPojo.getEmail());


        systemUser.setPassword(PasswordEncoderUtil.getInstance().encode(systemUserPojo.getPassword()));

        systemUserRepo.save(systemUser);
        return "Saved Successfully!";
        } catch (DataIntegrityViolationException e) {
            return "Email already exists!";
        }
    }

    public List<Map<String, Object>> getAllStudentsWithoutPassword() {
        List<SystemUser> students = systemUserRepo.findAll();

        List<Map<String, Object>> studentsWithoutPassword = new ArrayList<>();
        for (SystemUser student : students) {
            Map<String, Object> studentMap = new HashMap<>();
            studentMap.put("userId", student.getUserId());
            studentMap.put("username", student.getUsername());
            studentMap.put("email", student.getEmail());
            studentMap.put("role", student.getRole());
            // Add other fields as needed
            studentsWithoutPassword.add(studentMap);
        }

        return studentsWithoutPassword;
    }

    @Override
    public String setNewPassword(NewPasswordPojo newPasswordPojo) {
       String email=jwtService.extractUsername(newPasswordPojo.getToken());
       SystemUser systemUser=systemUserRepo.findByEmail(email).get();
        systemUser.setPassword(PasswordEncoderUtil.getInstance().encode(newPasswordPojo.getNewPassword()));
        systemUserRepo.save(systemUser);
        return null;
    }

    @Override
    public List<SystemUser> getAll() {
        return systemUserRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        systemUserRepo.deleteById(id);
    }

    @Override
    public Optional<SystemUser> getById(Long id) {
        return systemUserRepo.findById(id);
    }

    @Override
    public String update(Long id, SystemUserPojo systemUserPojo) {
        try {
        SystemUser systemUser = systemUserRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("SystemUser not found with ID: " + id));

        // Set values from SystemUserPojo to SystemUser entity for update
        systemUser.setUsername(systemUserPojo.getUsername());
        systemUser.setRole(systemUserPojo.getRole());
        systemUser.setEmail(systemUserPojo.getEmail());
        systemUser.setPassword(systemUserPojo.getPassword());

        systemUserRepo.save(systemUser);
        return "Updated Successfully!";
        } catch (DataIntegrityViolationException e) {
            return "Email already exists!";
        }
    }

    @Override
    public Optional<SystemUser> getByEmail(String email) {
        return systemUserRepo.findByEmail(email);
    }

    // Other custom service methods, if any
}
