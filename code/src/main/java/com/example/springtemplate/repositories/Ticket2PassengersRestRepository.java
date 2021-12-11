package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Passenger;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Ticket2PassengersRestRepository
        extends CrudRepository<Passenger, Integer> {
  @Query(value = "SELECT users.id, created_date, first_name, last_name, username, \n"
          + "password, email, date_of_birth FROM passengers, users, tickets WHERE users.id = passengers.id \n"
          + "AND passengers.id = tickets.passenger AND tickets.id=:userId",
          nativeQuery = true)
  public List<Passenger> findTicket2PassengerById(@Param("userId") Integer id);
}