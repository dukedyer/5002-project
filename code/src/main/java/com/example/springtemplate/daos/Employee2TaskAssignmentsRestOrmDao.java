package com.example.springtemplate.daos;
import com.example.springtemplate.models.TaskAssignment;
import com.example.springtemplate.repositories.Employee2EmployeeRestRepository;
import com.example.springtemplate.repositories.Employee2TaskAssignmentsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Employee2TaskAssignmentsRestOrmDao {
  @Autowired
  Employee2TaskAssignmentsRestRepository repo;

  @GetMapping("/api/employee2task-assignments/{tripId}")
  public List<TaskAssignment> findUser2TicketById(
          @PathVariable("tripId") Integer id) {
    return repo.findEmployee2TaskAssignmentById(id);
  }
}