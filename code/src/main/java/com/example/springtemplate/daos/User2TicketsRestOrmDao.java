package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.User2TicketRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class User2TicketsRestOrmDao {
  @Autowired
  User2TicketRestRepository user2TicketRestRepository;

  @GetMapping("/api/user2tickets/{userId}")
  public List<Ticket> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return user2TicketRestRepository.findUser2TicketById(id);
  }
}