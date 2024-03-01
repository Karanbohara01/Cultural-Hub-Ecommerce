package com.example.reactbackend.pojo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessagePojo {
    private Long messageId;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String message;
}
