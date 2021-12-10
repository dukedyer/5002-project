package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRestRepository
        extends CrudRepository<Task, Integer> {
    @Query(value = "SELECT * FROM tasks",
            nativeQuery = true)
    public List<Task> findAllTasks();
    @Query(value = "SELECT * FROM tasks WHERE id=:taskId",
            nativeQuery = true)
    public Task findTaskById(@Param("taskId") Integer id);
}
