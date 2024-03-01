package com.example.reactbackend.config;


import com.example.reactbackend.entity.EmailCredential;
import com.example.reactbackend.repo.EmailCredentialRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
@RequiredArgsConstructor
public class EmailConfiguration {

    private final EmailCredentialRepo emailCredRepo;

    @Bean
    public JavaMailSender getJavaMailSender() throws Exception {
        try {
            EmailCredential emailCredentials = emailCredRepo.findOneByActive();
            if (emailCredentials != null) {
                JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

                Properties props = new Properties();
                props.put("mail.transport.protocol", emailCredentials.getProtocol());
                props.put("mail.smtp.auth", "true");
                props.put("mail.smtp.starttls.enable", "true");
                props.put("mail.debug", "true");
                mailSender.setJavaMailProperties(props);

                mailSender.setHost(emailCredentials.getHost());
                mailSender.setPort(Integer.valueOf(emailCredentials.getPort()));
                mailSender.setUsername(emailCredentials.getEmail());
                mailSender.setPassword(emailCredentials.getPassword());
                return mailSender;
            } else {
                return new JavaMailSenderImpl();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}

