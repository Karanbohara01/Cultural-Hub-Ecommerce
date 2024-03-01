package com.example.reactbackend.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewArrivalsPojo {
    private Long productId;

    private String productName;

    private String brandName;

    private String discount;

    private String status;

    @JsonIgnore
    private MultipartFile image;

}
