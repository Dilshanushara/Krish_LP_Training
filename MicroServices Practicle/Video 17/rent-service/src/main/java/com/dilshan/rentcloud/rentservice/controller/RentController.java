package com.dilshan.rentcloud.rentservice.controller;

import com.dilshan.rentcloud.model.rent.Rent;
import com.dilshan.rentcloud.rentservice.model.Response;
import com.dilshan.rentcloud.rentservice.model.SimpleResponse;
import com.dilshan.rentcloud.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/services/rents")
public class RentController {


    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.save(rent);
    }

    @GetMapping(value = "/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) {

        if(type==null){
            return  new SimpleResponse(rentService.findById(id));
        }else{
         return rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }


}
