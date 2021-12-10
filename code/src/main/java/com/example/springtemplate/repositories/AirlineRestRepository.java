package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Airline;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AirlineRestRepository
        extends CrudRepository<Airline, String> {
    @Query(value = "SELECT * FROM airlines",
            nativeQuery = true)
    public List<Airline> findAllAirlines();
    @Query(value = "SELECT * FROM airlines WHERE airline=:airlineId",
            nativeQuery = true)
    public Airline findAirlineById(@Param("airlineId") String id);
}
