package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Passenger;
import com.example.springtemplate.models.Plane;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Ticket2EmployeesRestRepository;
import com.example.springtemplate.repositories.Ticket2PassengersRestRepository;
import com.example.springtemplate.repositories.Ticket2PlanesRestRepository;
import com.example.springtemplate.repositories.User2TicketRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Ticket2PlanesRestOrmDao {
  @Autowired
  Ticket2PlanesRestRepository ticket2planeRestRepository;

  @GetMapping("/api/ticket2planes/{userId}")
  public List<Plane> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return ticket2planeRestRepository.findTicket2PlaneById(id);
  }
}