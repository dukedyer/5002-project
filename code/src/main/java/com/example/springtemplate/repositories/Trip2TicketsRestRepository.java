package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Ticket;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Trip2TicketsRestRepository
        extends CrudRepository<Ticket, Integer> {
  @Query(value = "SELECT * FROM tickets WHERE trip=:ticketId",
          nativeQuery = true)
  public List<Ticket> findTrip2TicketById(@Param("ticketId") Integer id);
}