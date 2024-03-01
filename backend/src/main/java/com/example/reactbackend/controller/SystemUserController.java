package com.example.reactbackend.controller;


import com.example.reactbackend.entity.SystemUser;
import com.example.reactbackend.helper.ApiResponse;
import com.example.reactbackend.pojo.NewPasswordPojo;
import com.example.reactbackend.pojo.SystemUserPojo;
import com.example.reactbackend.service.SystemUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/system-user")
@RequiredArgsConstructor
public class SystemUserController {

    private final SystemUserService systemUserService;
    private final ApiResponse apiResponse;

    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, Object>> saveSystemUser(@Valid @RequestBody SystemUserPojo systemUserPojo) {

        return apiResponse.successResponse("Data saved successfully", true, null, systemUserService.save(systemUserPojo));
    }
    @GetMapping("/getAll")
    public List<SystemUser> getAll() {
        return this.systemUserService.getAll();
    }

    @GetMapping("/getById/{id}")
    public Optional<SystemUser> getById(@PathVariable("id") Long id) {
        return this.systemUserService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        this.systemUserService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public String updateSystemUser(@PathVariable("id") Long id, @Valid @RequestBody SystemUserPojo systemUserPojo) {
        return this.systemUserService.update(id, systemUserPojo);
    }

    @GetMapping("/getByEmail/{email}")
    public Optional<SystemUser> getByEmail(@PathVariable("email") String email) {
        return this.systemUserService.getByEmail(email);
    }


    @PostMapping("/new-password")
    public String setNewPassword(@RequestBody NewPasswordPojo newPasswordPojo){
        systemUserService.setNewPassword(newPasswordPojo);
        return "password changed";
    }
}
