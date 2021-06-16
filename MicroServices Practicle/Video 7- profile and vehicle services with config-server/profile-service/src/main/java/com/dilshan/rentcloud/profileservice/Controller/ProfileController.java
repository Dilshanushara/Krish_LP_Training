package com.dilshan.rentcloud.profileservice.Controller;

import com.dilshan.rentcloud.profileservice.Service.CustomerService;
import com.dilshan.rentcloud.commons.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/services")
public class ProfileController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/profile", method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer) {
        return customerService.save(customer);
    }

    @RequestMapping(value = "/profile",method = RequestMethod.GET)
    public ResponseEntity <Customer>fetchcustomerbyID (@RequestParam int id){
           Customer customer =customerService.fetchcustomerbyID(id);
            if (customer==null){
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok().body(customer);
    }

    @RequestMapping(value="/Allprofiles", method = RequestMethod.GET)
    public List fetchAllCustomers() {
        return customerService.fetchAllCustomers();
    }

}
