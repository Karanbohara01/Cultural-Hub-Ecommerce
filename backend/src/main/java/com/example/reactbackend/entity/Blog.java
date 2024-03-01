package com.example.reactbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;  // Import the correct Date class

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "blog")
public class Blog {
    @Id
    @SequenceGenerator(name = "blog_seq_gen", sequenceName = "blog_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "blog_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long blogId;
    @Column(name = "name")
    private String name;

    @Column(name = "blogs")
    private String blogs;

    @Column(name = "date")
//    private Date date;
    private LocalDate date;
    private String image;
}
