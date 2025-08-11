package com.example.college.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.college.service.StudentService;
import com.example.demo.Student;




@Controller
@RequestMapping("/students")

public class StudentController {
	private final StudentService studentService;
    private final CollegeService collegeService;

    public StudentController(StudentService studentService, CollegeService collegeService) {
        this.studentService = studentService;
        this.collegeService = collegeService;
    }

    @GetMapping
    public String listStudents(Model model) {
        model.addAttribute("students", studentService.getAllStudents());
        return "student_list";
    }

    @GetMapping("/new")
    public String showStudentForm(Model model) {
        model.addAttribute("student", new Student());
        model.addAttribute("colleges", collegeService.getColleges());
        return "student_form";
    }

    @PostMapping
    public String saveStudent(@ModelAttribute("student") Student student) {
        studentService.saveStudent(student);
        return "redirect:/students";
    }

    @GetMapping("/edit/{id}")
    public String editStudent(@PathVariable Long id, Model model) {
        model.addAttribute("student", studentService.getStudentById(id));
        model.addAttribute("colleges", collegeService.getColleges());
        return "student_form";
    }

    @GetMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return "redirect:/students";
    }
}

}
