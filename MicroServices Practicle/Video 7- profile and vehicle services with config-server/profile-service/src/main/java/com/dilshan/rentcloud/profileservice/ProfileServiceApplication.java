package com.dilshan.rentcloud.profileservice;

import com.dilshan.rentcloud.commons.model.Customer;
import com.dilshan.rentcloud.commons.model.Vehicle;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages= {"com.dilshan.rentcloud.commons.model"})
//@EntityScan(basePackageClasses = {Customer.class, Vehicle.class})

public class ProfileServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProfileServiceApplication.class, args);
    }

}
