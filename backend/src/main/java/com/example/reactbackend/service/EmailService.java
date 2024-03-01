package com.example.reactbackend.service;


import com.example.reactbackend.pojo.EmailRequest;

public interface EmailService {

    void sendCustomerConfirmationEmail(EmailRequest emailRequest);


    void resetPassword(EmailRequest emailRequest);
}
