package com.example.springtemplate.daos;

import com.example.springtemplate.models.Airline;
import com.example.springtemplate.repositories.AirlineRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AirlineRestOrmDao {
    @Autowired
    AirlineRestRepository airlineRepository;

    @PostMapping("/api/airlines")
    public Airline createAirline(@RequestBody Airline airline) {
        return airlineRepository.save(airline);
    }
    
    @GetMapping("/api/airlines")
    public List<Airline> findAllAirlines() {
        return airlineRepository.findAllAirlines();
    }
    
    @GetMapping("/api/airlines/{airlineId}")
    public Airline findAirlineById(
            @PathVariable("airlineId") String id) {
        return airlineRepository.findAirlineById(id);
    }
    
    @PutMapping("/api/airlines/{airlineId}")
    public Airline updateAirline(
            @PathVariable("airlineId") String id,
            @RequestBody Airline airlineUpdates) {
        Airline airline = airlineRepository.findAirlineById(id);

        airline.setAirline(airlineUpdates.getAirline());

        return airlineRepository.save(airline);
    }
    
    @DeleteMapping("/api/airlines/{airlineId}")
    public void deleteAirline(
            @PathVariable("airlineId") String id) {
        airlineRepository.deleteById(id);
    }
}