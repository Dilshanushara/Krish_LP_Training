package com.dilshan.rentcloud.profileservice.Service;

import com.dilshan.rentcloud.commons.model.Customer;

import java.util.List;

public interface CustomerService {

    Customer save(Customer customer);

    Customer fetchcustomerbyID(int id);

    List fetchAllCustomers();
}
