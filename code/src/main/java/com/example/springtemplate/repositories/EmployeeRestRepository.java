package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRestRepository
        extends CrudRepository<Employee, Integer> {
    @Query(value = "SELECT * FROM employees",
            nativeQuery = true)
    public List<Employee> findAllEmployees();
    @Query(value = "SELECT * FROM employees WHERE id=:employeeId",
            nativeQuery = true)
    public Employee findEmployeeById(@Param("employeeId") Integer id);
}
