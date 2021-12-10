package com.example.springtemplate.repositories;

import com.example.springtemplate.models.TaskAssignment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskAssignmentRestRepository
        extends CrudRepository<TaskAssignment, Integer> {
    @Query(value = "SELECT * FROM task_assignments",
            nativeQuery = true)
    public List<TaskAssignment> findAllTaskAssignments();
    @Query(value = "SELECT * FROM task_assignments WHERE id=:taskAssignmentId",
            nativeQuery = true)
    public TaskAssignment findTaskAssignmentById(@Param("taskAssignmentId") Integer id);
}
