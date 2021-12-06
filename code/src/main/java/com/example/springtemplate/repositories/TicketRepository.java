package com.example.springtemplate.repositories;


import com.example.springtemplate.models.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository
        extends CrudRepository<Ticket, Integer> {
}
