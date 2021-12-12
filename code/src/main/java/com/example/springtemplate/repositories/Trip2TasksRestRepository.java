package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Task;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Trip2TasksRestRepository
        extends CrudRepository<Task, Integer> {
  @Query(value = "SELECT * FROM tasks WHERE trip=:tripId",
          nativeQuery = true)
  public List<Task> findTrip2TaskById(@Param("tripId") Integer id);
}