package com.dilshan.rentcloud.cutomerservice.repository;

import com.dilshan.rentcloud.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer,Integer> {
}
