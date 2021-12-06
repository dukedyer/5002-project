package com.example.springtemplate.daos;

import com.example.springtemplate.models.Plane;
import com.example.springtemplate.repositories.PlaneRestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PlaneOrmDao {
    @Autowired
    PlaneRestRepository planeRepository;
    public Plane createPlane() { return null; }
    public List<Plane> findAllPlane() { return null; }
    public Plane findPlaneById(Integer id) { return null; }
    public Integer deletePlane(Integer id) { return null; }
    public Integer updatePlane() { return null; }
}
