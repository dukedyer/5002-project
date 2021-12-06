package com.example.springtemplate.daos;

import com.example.springtemplate.models.Passenger;
import com.example.springtemplate.repositories.PassengerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PassengerOrmDao {
    @Autowired
    PassengerRestRepository passengerRepository;
    public Passenger createPassenger() { return null; }
    public List<Passenger> findAllPassenger() { return null; }
    public Passenger findPassengerById(Integer id) { return null; }
    public Integer deletePassenger(Integer id) { return null; }
    public Integer updatePassenger() { return null; }
}
