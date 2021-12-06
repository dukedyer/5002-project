package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Passenger;
import org.springframework.data.repository.CrudRepository;

public interface PassengerRepository
        extends CrudRepository<Passenger, Integer> {
}
