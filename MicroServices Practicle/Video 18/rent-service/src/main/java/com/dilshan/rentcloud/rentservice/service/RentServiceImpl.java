package com.dilshan.rentcloud.rentservice.service;
import com.dilshan.rentcloud.model.customer.Customer;
import com.dilshan.rentcloud.model.rent.Rent;
import com.dilshan.rentcloud.model.vehicle.Vehicle;
import com.dilshan.rentcloud.rentservice.hystrix.VehicleCommand;
import com.dilshan.rentcloud.rentservice.model.DetailResponse;
import com.dilshan.rentcloud.rentservice.repository.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;


@Service
public class RentServiceImpl implements RentService {


    @Autowired
    RentRepository rentRepository;

    @Bean
    @LoadBalanced
    RestTemplate getRestTemplate(RestTemplateBuilder builder){
        return builder.build();
    }

    @Autowired
    RestTemplate restTemplate;


    @Override
    public Rent save(Rent customer) {
        return rentRepository.save(customer);
    }


    @Override
    public Rent findById(int id) {
        Optional<Rent> rent = rentRepository.findById(id);

        if (rent.isPresent())
            return rent.get();
        else
            return new Rent();

    }


    @Override
    public List<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public DetailResponse findDetailResponse(int id) {


        Rent rent=findById(id);
        Customer customer=getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());

        return new DetailResponse(rent,customer,vehicle);


    }

    private Customer getCustomer(int customerId){
        CommonHysctrixCommand<Customer> customerCommonHysctrixCommand=new CommonHysctrixCommand<Customer>(setter,()->
        {
            return restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
        },()->{
            return new Customer();
        });

        Future<Customer> customerFuture=customerCommonHysctrixCommand.queue();
        return customerFuture.get();

//        Customer customer=restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
//        return customer;

    }

    private Vehicle getVehicle(int vehicleId){
        VehicleCommand vehicleCommand =new VehicleCommand(restTemplate.vehicleId);
        return vehicleCommand.execute();


//       return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);


    }
}
