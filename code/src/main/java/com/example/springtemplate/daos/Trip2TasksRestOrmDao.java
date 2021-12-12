package com.example.springtemplate.daos;

import com.example.springtemplate.models.Task;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Plane2TicketsRestRepository;
import com.example.springtemplate.repositories.Trip2TasksRestRepository;
import com.example.springtemplate.repositories.Trip2TicketsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Trip2TasksRestOrmDao {
  @Autowired
  Trip2TasksRestRepository trip2TasksRestRepository;

  @GetMapping("/api/trip2tasks/{tripId}")
  public List<Task> findUser2TicketById(
          @PathVariable("tripId") Integer id) {
    return trip2TasksRestRepository.findTrip2TaskById(id);
  }
}