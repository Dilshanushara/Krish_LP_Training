package com.dilshan.rentcloud.rentservice.repository;

import com.dilshan.rentcloud.model.rent.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent,Integer> {
}
