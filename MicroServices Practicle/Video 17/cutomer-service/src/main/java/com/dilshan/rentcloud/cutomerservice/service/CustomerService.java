package com.dilshan.rentcloud.cutomerservice.service;
import com.dilshan.rentcloud.model.customer.Customer;

import java.util.List;
public interface CustomerService {

    Customer save(Customer customer);
    Customer findById(int id);
    List<Customer> findAll();
}
