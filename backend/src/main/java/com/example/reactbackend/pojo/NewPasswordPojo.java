package com.example.reactbackend.pojo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NewPasswordPojo {
    private String newPassword;
    private String token;
}
