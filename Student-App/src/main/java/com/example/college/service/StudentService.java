package com.example.college.service;

import java.util.List;

import com.example.college.entities.Student;

public interface StudentService {

	Student saveStudent(Student student);
    Student getStudentById(Long id);
    List<Student> getAllStudents();
    void deleteStudent(Long id);
}
