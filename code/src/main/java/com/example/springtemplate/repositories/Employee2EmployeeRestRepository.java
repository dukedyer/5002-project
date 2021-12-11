package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Employee;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Employee2EmployeeRestRepository
        extends CrudRepository<Employee, Integer> {
  @Query(value = "SELECT b.id, first_name, last_name, date_of_birth, email, username, password, start_date, role, airline, manager FROM employees a, users b WHERE manager = b.id AND a.id=:employeeId",
          nativeQuery = true)
  public List<Employee> findEmployee2EmployeeById(@Param("employeeId") Integer id);
}