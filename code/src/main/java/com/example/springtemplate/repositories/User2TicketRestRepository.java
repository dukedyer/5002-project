package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Ticket;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface User2TicketRestRepository
        extends CrudRepository<Ticket, Integer> {
  @Query(value = "SELECT * FROM tickets WHERE passenger=:userId",
          nativeQuery = true)
  public List<Ticket> findUser2TicketById(@Param("userId") Integer id);
}