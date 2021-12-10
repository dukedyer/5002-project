package com.example.springtemplate.daos;

import com.example.springtemplate.models.Trip;
import com.example.springtemplate.repositories.TripRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TripRestOrmDao {
    @Autowired
    TripRestRepository tripRepository;

    @PostMapping("/api/trips")
    public Trip createTrip(@RequestBody Trip trip) {
        return tripRepository.save(trip);
    }
    
    @GetMapping("/api/trips")
    public List<Trip> findAllTrips() {
        return tripRepository.findAllTrips();
    }
    
    @GetMapping("/api/trips/{tripId}")
    public Trip findTripById(
            @PathVariable("tripId") Integer id) {
        return tripRepository.findTripById(id);
    }
    
    @PutMapping("/api/trips/{tripId}")
    public Trip updateTrip(
            @PathVariable("tripId") Integer id,
            @RequestBody Trip tripUpdates) {
        Trip trip = tripRepository.findTripById(id);

        trip.setOrigin(tripUpdates.getOrigin());
        trip.setDestination(tripUpdates.getDestination());
        trip.setAirline(tripUpdates.getAirline());


        return tripRepository.save(trip);
    }
    
    @DeleteMapping("/api/trips/{tripId}")
    public void deleteTrip(
            @PathVariable("tripId") Integer id) {
        tripRepository.deleteById(id);
    }
}