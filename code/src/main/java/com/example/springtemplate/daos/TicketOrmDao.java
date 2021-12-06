package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ticket;
import com.example.springtemplate.repositories.TicketRestRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TicketOrmDao {
    @Autowired
    TicketRestRepository ticketRepository;
    public Ticket createTicket() { return null; }
    public List<Ticket> findAllTicket() { return null; }
    public Ticket findTicketById(Integer id) { return null; }
    public Integer deleteTicket(Integer id) { return null; }
    public Integer updateTicket() { return null; }
}
