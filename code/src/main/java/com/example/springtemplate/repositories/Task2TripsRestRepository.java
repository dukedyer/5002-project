package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Plane;
import com.example.springtemplate.models.Trip;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Task2TripsRestRepository
        extends CrudRepository<Trip, Integer> {
  @Query(value = "SELECT trips.id, origin, destination, airline FROM trips, tasks WHERE trips.id = tasks.trip AND tasks.id=:userId",
          nativeQuery = true)
  public List<Trip> findTask2TripById(@Param("userId") Integer id);
}