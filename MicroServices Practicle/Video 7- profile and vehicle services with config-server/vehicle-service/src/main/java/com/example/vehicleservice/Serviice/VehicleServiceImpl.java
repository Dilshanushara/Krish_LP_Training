package com.example.vehicleservice.Serviice;

import com.example.vehicleservice.Repository.VehicleRepository;
import com.dilshan.rentcloud.commons.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleServiceImpl implements VehicleService{

    @Autowired
    VehicleRepository vehicleRepository;


    @Override
    public Vehicle save(Vehicle vehicle) {
       return vehicleRepository.save(vehicle);
    }
}
