package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRestRepository
        extends CrudRepository<Employee, Integer> {
    @Query(value = "SELECT b.id, first_name, last_name, date_of_birth, email, username, \n"
            + "password, start_date, role, airline, manager FROM employees a, users b\n"
            + "WHERE a.id = b.id;",
            nativeQuery = true)
    public List<Employee> findAllEmployees();
    @Query(value = "SELECT b.id, first_name, last_name, date_of_birth, email, username, \n"
            + "password, start_date, role, airline, manager FROM employees a, users b\n"
            + "WHERE a.id = b.id AND a.id=:employeeId",
            nativeQuery = true)
    public Employee findEmployeeById(@Param("employeeId") Integer id);
}