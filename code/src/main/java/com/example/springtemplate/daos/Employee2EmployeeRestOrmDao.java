package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Employee2EmployeeRestRepository;
import com.example.springtemplate.repositories.User2TicketRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Employee2EmployeeRestOrmDao {
  @Autowired
  Employee2EmployeeRestRepository employee2employeeRestRepository;

  @GetMapping("/api/employee2employee/{employeeId}")
  public List<Employee> findUser2TicketById(
          @PathVariable("employeeId") Integer id) {
    return employee2employeeRestRepository.findEmployee2EmployeeById(id);
  }
}