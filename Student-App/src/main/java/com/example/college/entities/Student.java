package com.example.college.entities;

import com.example.demo.College;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Student {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String name;
	    private String email;

	    @ManyToOne
	    @JoinColumn(name = "college_id")
	    private College college;

	    public Student() {}
}
