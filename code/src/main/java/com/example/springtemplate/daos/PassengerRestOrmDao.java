package com.example.springtemplate.daos;

import com.example.springtemplate.models.Passenger;
import com.example.springtemplate.repositories.PassengerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PassengerRestOrmDao {
    @Autowired
    PassengerRestRepository passengerRepository;

    @PostMapping("/api/passengers")
    public Passenger createPassenger(@RequestBody Passenger passenger) {
        return passengerRepository.save(passenger);
    }
    
    @GetMapping("/api/passengers")
    public List<Passenger> findAllPassengers() {
        return passengerRepository.findAllPassengers();
    }
    
    @GetMapping("/api/passengers/{passengerId}")
    public Passenger findPassengerById(
            @PathVariable("passengerId") Integer id) {
        return passengerRepository.findPassengerById(id);
    }
    
    @PutMapping("/api/passengers/{passengerId}")
    public Passenger updatePassenger(
            @PathVariable("passengerId") Integer id,
            @RequestBody Passenger passengerUpdates) {
        Passenger passenger = passengerRepository.findPassengerById(id);

        passenger.setFirstName(passengerUpdates.getFirstName());
        passenger.setLastName(passengerUpdates.getLastName());
        passenger.setDateOfBirth(passengerUpdates.getDateOfBirth());
        passenger.setEmail(passengerUpdates.getEmail());
        passenger.setUsername(passengerUpdates.getUsername());
        passenger.setPassword(passengerUpdates.getPassword());
        passenger.setCreatedDate(passengerUpdates.getCreatedDate());

        return passengerRepository.save(passenger);
    }
    
    @DeleteMapping("/api/passengers/{passengerId}")
    public void deletePassenger(
            @PathVariable("passengerId") Integer id) {
        passengerRepository.deleteById(id);
    }
}