package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Trip;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Ticket2TripsRestRepository
        extends CrudRepository<Trip, Integer> {
  @Query(value = "SELECT trips.id, origin, destination, airline FROM trips, tickets "
          + "WHERE trips.id = tickets.trip AND tickets.id=:ticketId",
          nativeQuery = true)
  public List<Trip> findTicket2TripById(@Param("ticketId") Integer id);
}