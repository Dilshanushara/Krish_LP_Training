package com.example.demo.Controller;

import com.example.demo.Service.StudentService;
import com.example.demo.Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.PublicKey;

@RestController
public class MainController {

    @Autowired
    StudentService studentService;

    @RequestMapping(value ="/hello",method = RequestMethod.GET)
    public String greeting(){
        return "Hello spring boot";
    }


    @RequestMapping(value ="/student",method=RequestMethod.POST)
    public Student save(@RequestBody Student student){
        return studentService.save(student);
    }


    @RequestMapping(value = "/student",method = RequestMethod.GET)
    public ResponseEntity<Student> fetchstudentbyID(@RequestParam int id){

        Student student=studentService.fetchstudentbyID(id);
        if (student==null){
           return ResponseEntity.notFound().build();
        }
        else
           return ResponseEntity.ok().body(student);
    }

}
