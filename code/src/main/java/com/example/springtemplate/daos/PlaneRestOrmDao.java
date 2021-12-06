package com.example.springtemplate.daos;

import com.example.springtemplate.models.Plane;
import com.example.springtemplate.repositories.PlaneRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlaneRestOrmDao {
    @Autowired
    PlaneRestRepository planeRepository;

    @PostMapping("/api/planes")
    public Plane createPlane(@RequestBody Plane plane) {
        return planeRepository.save(plane);
    }
    
    @GetMapping("/api/planes")
    public List<Plane> findAllPlanes() {
        return planeRepository.findAllPlanes();
    }
    
    @GetMapping("/api/planes/{planeId}")
    public Plane findPlaneById(
            @PathVariable("planeId") Integer id) {
        return planeRepository.findPlaneById(id);
    }
    
    @PutMapping("/api/planes/{planeId}")
    public Plane updatePlane(
            @PathVariable("planeId") Integer id,
            @RequestBody Plane planeUpdates) {
        Plane plane = planeRepository.findPlaneById(id);

        plane.setName(planeUpdates.getName());
        plane.setSerialNumber(planeUpdates.getSerialNumber());

        return planeRepository.save(plane);
    }
    
    @DeleteMapping("/api/planes/{planeId}")
    public void deletePlane(
            @PathVariable("planeId") Integer id) {
        planeRepository.deleteById(id);
    }
}