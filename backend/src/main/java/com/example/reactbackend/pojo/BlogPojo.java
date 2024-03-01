package com.example.reactbackend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BlogPojo {
    private Long blogId;

    private String name;
    private  String blogs;

    private LocalDate date;


    @JsonIgnore
    private MultipartFile image;

}
