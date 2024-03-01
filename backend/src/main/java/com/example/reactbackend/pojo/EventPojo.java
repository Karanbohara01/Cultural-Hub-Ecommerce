package com.example.reactbackend.pojo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EventPojo {
    private Long eventId;
    private String title;
    private Date start;
    private Date end;


}
