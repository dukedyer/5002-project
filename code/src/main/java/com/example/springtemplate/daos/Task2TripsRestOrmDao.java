package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Passenger;
import com.example.springtemplate.models.Plane;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.models.Trip;
import com.example.springtemplate.repositories.Task2TripsRestRepository;
import com.example.springtemplate.repositories.Ticket2EmployeesRestRepository;
import com.example.springtemplate.repositories.Ticket2PassengersRestRepository;
import com.example.springtemplate.repositories.Ticket2PlanesRestRepository;
import com.example.springtemplate.repositories.User2TicketRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Task2TripsRestOrmDao {
  @Autowired
  Task2TripsRestRepository task2tripRestRepository;

  @GetMapping("/api/task2trips/{userId}")
  public List<Trip> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return task2tripRestRepository.findTask2TripById(id);
  }
}