package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Plane;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlaneRestRepository
        extends CrudRepository<Plane, Integer> {
    @Query(value = "SELECT * FROM planes",
            nativeQuery = true)
    public List<Plane> findAllPlanes();
    @Query(value = "SELECT * FROM planes WHERE id=:planeId",
            nativeQuery = true)
    public Plane findPlaneById(@Param("planeId") Integer id);
}
