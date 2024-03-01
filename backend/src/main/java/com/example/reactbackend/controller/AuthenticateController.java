package com.example.reactbackend.controller;


import com.example.reactbackend.helper.ApiResponse;
import com.example.reactbackend.pojo.AuthenticateRequest;
import com.example.reactbackend.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticateController {
    private final ApiResponse apiResponse;
    private final AuthenticateService authenticateService;

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticateRequest authenticateRequest) {

        return apiResponse.successResponse(
                "Token generated successfully.",
                true, null,
                authenticateService.authenticate(authenticateRequest));
    }

}
