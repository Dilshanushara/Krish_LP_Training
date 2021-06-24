package com.dilshan.rentcloud.cutomerservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.dilshan.rentcloud.model.customer")
public class CutomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CutomerServiceApplication.class, args);
    }

}
