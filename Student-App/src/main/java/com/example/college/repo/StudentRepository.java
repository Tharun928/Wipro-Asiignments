package com.example.college.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.college.entities.Student;

public interface StudentRepository  extends JpaRepository<Student, Long>{

	  List<Student> findByCollegeId(Long collegeId);
}
