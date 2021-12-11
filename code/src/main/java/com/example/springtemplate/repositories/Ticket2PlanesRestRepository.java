package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Plane;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Ticket2PlanesRestRepository
        extends CrudRepository<Plane, Integer> {
  @Query(value = "SELECT planes.id, name, serial_number FROM planes, "
          + "tickets WHERE planes.id = tickets.plane_id AND tickets.id=:userId",
          nativeQuery = true)
  public List<Plane> findTicket2PlaneById(@Param("userId") Integer id);
}