package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Ticket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TicketRestRepository
        extends CrudRepository<Ticket, Integer> {
    @Query(value = "SELECT * FROM tickets",
            nativeQuery = true)
    public List<Ticket> findAllTickets();
    @Query(value = "SELECT * FROM tickets WHERE id=:ticketId",
            nativeQuery = true)
    public Ticket findTicketById(@Param("ticketId") Integer id);
}
