package com.dilshan.rentcloud.cutomerservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EntityScan(basePackages = "com.dilshan.rentcloud.model.customer")
@EnableEurekaClient
public class CutomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CutomerServiceApplication.class, args);
    }

}
