package com.example.reactbackend.helper;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;


@Configuration
public class ApiResponse {

    public ResponseEntity<Map<String, Object>> successResponse(String message,boolean status, Object error,Object data) {
        Map<String,Object> response= new HashMap<>();
        response.put("message", message);
        response.put("status", status);
        response.put("error", error);
        response.put("data", data);
        return ResponseEntity.ok(response);
    }
}
