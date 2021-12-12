package com.example.springtemplate.daos;

import com.example.springtemplate.models.TaskAssignment;
import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.Plane2TicketsRestRepository;
import com.example.springtemplate.repositories.Task2TaskAssignmentsRestRepository;
import com.example.springtemplate.repositories.Trip2TicketsRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class Task2TaskAssignmentsRestOrmDao {
  @Autowired
  Task2TaskAssignmentsRestRepository task2TaskAssignmentsRestRepository;

  @GetMapping("/api/task2task-assignments/{taskId}")
  public List<TaskAssignment> findUser2TicketById(
          @PathVariable("taskId") Integer id) {
    return task2TaskAssignmentsRestRepository.findTask2TaskAssignmentById(id);
  }
}