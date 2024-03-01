//package com.example.reactbackend.pojo;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//
//public class OrderPojo {
//    private Long orderId;
//    private String customerName;
//    private String customerEmail;
//    private String productName;
//    private Integer totalAmount;
//    private String status;
//    private String action;
//}


package com.example.reactbackend.pojo;

import lombok.Data;

@Data
public class OrderPojo {
    private Long orderId;
    private String customerName;
    private String customerEmail;
    private String productName;
    private double totalAmount;
    private String status;

}
