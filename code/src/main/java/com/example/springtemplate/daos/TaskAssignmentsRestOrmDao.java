package com.example.springtemplate.daos;

import com.example.springtemplate.models.TaskAssignment;
import com.example.springtemplate.repositories.TaskAssignmentRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Referenced Stack overflow to use dashes for multi-word endpoints
// Source: https://stackoverflow.com/q/10302179

@RestController
@CrossOrigin(origins = "*")
public class TaskAssignmentsRestOrmDao {
    @Autowired
    TaskAssignmentRestRepository taskAssignmentRepository;

    @PostMapping("/api/task-assignments")
    public TaskAssignment createTaskAssignment(@RequestBody TaskAssignment taskAssignment) {
        return taskAssignmentRepository.save(taskAssignment);
    }
    
    @GetMapping("/api/task-assignments")
    public List<TaskAssignment> findAllTaskAssignments() {
        return taskAssignmentRepository.findAllTaskAssignments();
    }
    
    @GetMapping("/api/task-assignments/{taskAssignmentId}")
    public TaskAssignment findTaskAssignmentById(
            @PathVariable("taskAssignmentId") Integer id) {
        return taskAssignmentRepository.findTaskAssignmentById(id);
    }
    
    @PutMapping("/api/task-assignments/{taskAssignmentId}")
    public TaskAssignment updateTaskAssignment(
            @PathVariable("taskAssignmentId") Integer id,
            @RequestBody TaskAssignment taskAssignmentUpdates) {
        TaskAssignment taskAssignment = taskAssignmentRepository.findTaskAssignmentById(id);
        taskAssignment.setTask(taskAssignmentUpdates.getTask());
        taskAssignment.setEmployee(taskAssignmentUpdates.getEmployee());
        taskAssignment.setDate(taskAssignmentUpdates.getDate());
        return taskAssignmentRepository.save(taskAssignment);
    }
    
    @DeleteMapping("/api/task-assignments/{taskAssignmentId}")
    public void deleteTaskAssignment(
            @PathVariable("taskAssignmentId") Integer id) {
        taskAssignmentRepository.deleteById(id);
    }
}