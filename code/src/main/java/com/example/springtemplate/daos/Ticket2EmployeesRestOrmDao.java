package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Ticket2EmployeesRestRepository;
import com.example.springtemplate.repositories.User2TicketRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Ticket2EmployeesRestOrmDao {
  @Autowired
  Ticket2EmployeesRestRepository user2TicketRestRepository;

  @GetMapping("/api/ticket2employees/{userId}")
  public List<Employee> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return user2TicketRestRepository.findTicket2EmployeeById(id);
  }
}