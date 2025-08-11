package com.example.demo;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Student {
	private Long id;
	private String name;
	private String email;

    @ManyToOne
    @JoinColumn(name = "college_id")
    private College college;

    public Student() {}

}
