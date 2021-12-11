package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Passenger;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PassengerRestRepository
        extends CrudRepository<Passenger, Integer> {
    @Query(value = "SELECT b.id, first_name, last_name, date_of_birth, email, username, \n"
            + "password, created_date FROM passengers a, users b WHERE a.id = b.id",
            nativeQuery = true)
    public List<Passenger> findAllPassengers();
    @Query(value = "SELECT b.id, first_name, last_name, date_of_birth, email, username, \n"
            + "password, created_date FROM passengers a, users b WHERE a.id = b.id "
            + "AND a.id=:passengerId",
            nativeQuery = true)
    public Passenger findPassengerById(@Param("passengerId") Integer id);
}
