package com.example.reactbackend.service;


import com.example.reactbackend.pojo.AuthenticateRequest;
import com.example.reactbackend.pojo.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
