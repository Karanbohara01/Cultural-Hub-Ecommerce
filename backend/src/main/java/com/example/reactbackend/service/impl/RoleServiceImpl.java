package com.example.reactbackend.service.impl;


import com.example.reactbackend.entity.Role;
import com.example.reactbackend.repo.RoleRepo;
import com.example.reactbackend.service.RoleService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepo roleRepo;

    @Override
    public String save(Role role) {
        roleRepo.save(role);
        return "Saved Successfully!";
    }

    @Override
    public List<Role> getAll() {
        return roleRepo.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        roleRepo.deleteById(id);
    }

    @Override
    public Optional<Role> getById(Integer id) {
        return roleRepo.findById(id);
    }

    @Override
    public String update(Integer id, Role role) {
        Role existingRole = roleRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Role not found with ID: " + id));

        // Set values from updated Role to existingRole entity
        existingRole.setName(role.getName());

        roleRepo.save(existingRole);
        return "Updated Successfully!";
    }
}
