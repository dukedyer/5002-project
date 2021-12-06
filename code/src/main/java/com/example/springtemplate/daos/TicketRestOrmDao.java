package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.TicketRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TicketRestOrmDao {
    @Autowired
    TicketRestRepository ticketRepository;

    @PostMapping("/api/tickets")
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketRepository.save(ticket);
    }
    
    @GetMapping("/api/tickets")
    public List<Ticket> findAllTickets() {
        return ticketRepository.findAllTickets();
    }
    
    @GetMapping("/api/tickets/{ticketId}")
    public Ticket findTicketById(
            @PathVariable("ticketId") Integer id) {
        return ticketRepository.findTicketById(id);
    }
    
    @PutMapping("/api/tickets/{ticketId}")
    public Ticket updateTicket(
            @PathVariable("ticketId") Integer id,
            @RequestBody Ticket ticketUpdates) {
        Ticket ticket = ticketRepository.findTicketById(id);

        ticket.setUserId(ticketUpdates.getUserId());
        ticket.setBoardingTime(ticketUpdates.getBoardingTime());
        ticket.setBoardingGroup(ticketUpdates.getBoardingGroup());
        ticket.setGate(ticketUpdates.getGate());
        ticket.setTripId(ticketUpdates.getTripId());
        ticket.setPlaneId(ticketUpdates.getPlaneId());

        return ticketRepository.save(ticket);
    }
    
    @DeleteMapping("/api/tickets/{ticketId}")
    public void deleteTicket(
            @PathVariable("ticketId") Integer id) {
        ticketRepository.deleteById(id);
    }
}