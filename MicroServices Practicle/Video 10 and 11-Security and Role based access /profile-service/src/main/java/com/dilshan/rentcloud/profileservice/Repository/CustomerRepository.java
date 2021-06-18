package com.dilshan.rentcloud.profileservice.Repository;

import com.dilshan.rentcloud.commons.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
}
