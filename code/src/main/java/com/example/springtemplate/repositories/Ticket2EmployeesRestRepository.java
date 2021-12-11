package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Employee;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Ticket2EmployeesRestRepository
        extends CrudRepository<Employee, Integer> {
  @Query(value = "SELECT users.id, start_date, role, airline, manager, first_name, last_name, username, \n"
          + "password, email, date_of_birth FROM employees, users, tickets WHERE users.id = employees.id \n"
          + "AND employees.id = tickets.passenger AND tickets.id=:userId",
          nativeQuery = true)
  public List<Employee> findTicket2EmployeeById(@Param("userId") Integer id);
}