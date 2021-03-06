package com.dilshan.rentcloud.profileservice.Service;

import com.dilshan.rentcloud.profileservice.Repository.CustomerRepository;
import com.dilshan.rentcloud.commons.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepository customerRepository;


    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer fetchcustomerbyID(int id) {
        Optional<Customer> customer=customerRepository.findById(id);
        if (customer.isPresent()){
            return customer.get();
        }
        return null;
    }

    @Override
    public List fetchAllCustomers() {
        return customerRepository.findAll();
    }
}
