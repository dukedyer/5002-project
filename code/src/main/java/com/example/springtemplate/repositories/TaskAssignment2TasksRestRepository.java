package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Plane;
import com.example.springtemplate.models.Task;
import com.example.springtemplate.models.Trip;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskAssignment2TasksRestRepository
        extends CrudRepository<Task, Integer> {
  @Query(value = "SELECT tasks.id, status, name, trip FROM tasks, task_assignments \n"
          + "WHERE tasks.id = task_assignments.task AND task_assignments.id=:taskId",
          nativeQuery = true)
  public List<Task> findTaskAssignment2TaskById(@Param("taskId") Integer id);
}