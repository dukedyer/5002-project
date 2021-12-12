package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Plane2TicketsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Plane2TicketsRestOrmDao {
  @Autowired
  Plane2TicketsRestRepository plane2TicketRestRepository;

  @GetMapping("/api/plane2tickets/{ticketId}")
  public List<Ticket> findUser2TicketById(
          @PathVariable("ticketId") Integer id) {
    return plane2TicketRestRepository.findPlane2TicketById(id);
  }
}