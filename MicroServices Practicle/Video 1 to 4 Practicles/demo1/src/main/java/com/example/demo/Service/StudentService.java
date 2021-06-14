package com.example.demo.Service;

import com.example.demo.Model.Student;

public interface StudentService {
    Student save(Student student);

    Student fetchstudentbyID(int id);
}
