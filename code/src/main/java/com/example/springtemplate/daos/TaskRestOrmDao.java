package com.example.springtemplate.daos;

import com.example.springtemplate.models.Task;
import com.example.springtemplate.repositories.TaskRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TaskRestOrmDao {
    @Autowired
    TaskRestRepository taskRepository;

    @PostMapping("/api/tasks")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }
    
    @GetMapping("/api/tasks")
    public List<Task> findAllTasks() {
        return taskRepository.findAllTasks();
    }
    
    @GetMapping("/api/tasks/{taskId}")
    public Task findTaskById(
            @PathVariable("taskId") Integer id) {
        return taskRepository.findTaskById(id);
    }
    
    @PutMapping("/api/tasks/{taskId}")
    public Task updateTask(
            @PathVariable("taskId") Integer id,
            @RequestBody Task taskUpdates) {
        Task task = taskRepository.findTaskById(id);

        task.setStatus(taskUpdates.getStatus());
        task.setName(taskUpdates.getName());
        task.setTrip(taskUpdates.getTrip());


        return taskRepository.save(task);
    }
    
    @DeleteMapping("/api/tasks/{taskId}")
    public void deleteTask(
            @PathVariable("taskId") Integer id) {
        taskRepository.deleteById(id);
    }
}