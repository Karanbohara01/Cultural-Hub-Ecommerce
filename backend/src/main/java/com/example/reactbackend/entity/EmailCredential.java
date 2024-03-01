package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="email_credentials")
public class EmailCredential {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Email_Seq_GEN")
    @SequenceGenerator(name = "Email_Seq_GEN", sequenceName = "Email_Seq", initialValue = 1,
            allocationSize = 1)
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;
    private String host;
    private String port;
    private Date date;
    private Boolean active;
    private String protocol;

}

