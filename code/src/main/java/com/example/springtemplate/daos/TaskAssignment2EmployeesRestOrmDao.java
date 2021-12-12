package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;

import com.example.springtemplate.repositories.TaskAssignment2EmployeesRestRepository;
import com.example.springtemplate.repositories.TaskAssignment2TasksRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TaskAssignment2EmployeesRestOrmDao {
  @Autowired
  TaskAssignment2EmployeesRestRepository repo;

  @GetMapping("/api/task-assignment2employees/{userId}")
  public List<Employee> findUser2TicketById(
          @PathVariable("userId") Integer id) {
    return repo.findAssignment2EmployeeById(id);
  }
}