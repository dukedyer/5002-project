package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Ticket;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Plane2TicketsRestRepository
        extends CrudRepository<Ticket, Integer> {
  @Query(value = "SELECT * FROM tickets WHERE plane_id=:ticketId",
          nativeQuery = true)
  public List<Ticket> findPlane2TicketById(@Param("ticketId") Integer id);
}