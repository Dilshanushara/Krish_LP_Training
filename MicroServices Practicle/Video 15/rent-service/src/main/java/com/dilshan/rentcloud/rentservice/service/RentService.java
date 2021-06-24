package com.dilshan.rentcloud.rentservice.service;

import com.dilshan.rentcloud.model.rent.Rent;
import com.dilshan.rentcloud.rentservice.model.DetailResponse;

import java.util.List;


public interface RentService {
    Rent save(Rent customer);

    Rent findById(int id);

    List<Rent> findAll();

    DetailResponse findDetailResponse(int id);
}
