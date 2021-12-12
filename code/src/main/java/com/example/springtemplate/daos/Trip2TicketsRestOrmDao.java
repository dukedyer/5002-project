package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Plane2TicketsRestRepository;
import com.example.springtemplate.repositories.Trip2TicketsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Trip2TicketsRestOrmDao {
  @Autowired
  Trip2TicketsRestRepository trip2TicketRestRepository;

  @GetMapping("/api/trip2tickets/{ticketId}")
  public List<Ticket> findUser2TicketById(
          @PathVariable("ticketId") Integer id) {
    return trip2TicketRestRepository.findTrip2TicketById(id);
  }
}