package com.example.springtemplate.daos;

import com.example.springtemplate.models.Plane;
import com.example.springtemplate.models.Trip;
import com.example.springtemplate.repositories.Ticket2TripsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Ticket2TripsRestOrmDao {
  @Autowired
  Ticket2TripsRestRepository ticket2tripRestRepository;

  @GetMapping("/api/ticket2trips/{userId}")
  public List<Trip> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return ticket2tripRestRepository.findTicket2TripById(id);
  }
}