package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Passenger;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PassengerRestRepository
        extends CrudRepository<Passenger, Integer> {
    @Query(value = "SELECT * FROM passengers",
            nativeQuery = true)
    public List<Passenger> findAllPassengers();
    @Query(value = "SELECT * FROM passengers WHERE id=:passengerId",
            nativeQuery = true)
    public Passenger findPassengerById(@Param("passengerId") Integer id);
}
