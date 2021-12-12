package com.example.springtemplate.repositories;
import com.example.springtemplate.models.Employee;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskAssignment2EmployeesRestRepository
        extends CrudRepository<Employee, Integer> {
  @Query(value = "SELECT employees.id, first_name, last_name, date_of_birth, email, username,\n"
          + "password, start_date, role, airline, manager FROM users, employees, task_assignments\n"
          + "WHERE employees.id = task_assignments.employee AND users.id = employees.id AND task_assignments.id=:userId",
          nativeQuery = true)
  public List<Employee> findAssignment2EmployeeById(@Param("userId") Integer id);
}