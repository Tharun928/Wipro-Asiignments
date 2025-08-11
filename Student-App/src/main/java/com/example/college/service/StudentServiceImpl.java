package com.example.college.service;

import java.util.List;

import com.example.college.entities.Student;
import com.example.college.repo.StudentRepository;

public class StudentServiceImpl implements StudentService {

	 private final StudentRepository studentRepository;

	    public StudentServiceImpl(StudentRepository studentRepository) {
	        this.studentRepository = studentRepository;
	    }

	    @Override
	    public Student saveStudent(Student student) {
	        return studentRepository.save(student);
	    }

	    @Override
	    public Student getStudentById(Long id) {
	        return studentRepository.findById(id).orElse(null);
	    }

	    @Override
	    public List<Student> getAllStudents() {
	        return studentRepository.findAll();
	    }

	    @Override
	    public void deleteStudent(Long id) {
	        studentRepository.deleteById(id);
	    }
}
