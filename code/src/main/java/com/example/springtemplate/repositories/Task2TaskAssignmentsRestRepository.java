package com.example.springtemplate.repositories;
import com.example.springtemplate.models.TaskAssignment;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Task2TaskAssignmentsRestRepository
        extends CrudRepository<TaskAssignment, Integer> {
  @Query(value = "SELECT * FROM task_assignments WHERE task=:assignmentId",
          nativeQuery = true)
  public List<TaskAssignment> findTask2TaskAssignmentById(@Param("assignmentId") Integer id);
}