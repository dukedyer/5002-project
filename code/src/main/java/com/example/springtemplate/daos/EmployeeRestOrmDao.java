package com.example.springtemplate.daos;

import com.example.springtemplate.models.Employee;
import com.example.springtemplate.repositories.EmployeeRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeRestOrmDao {
    @Autowired
    EmployeeRestRepository employeeRepository;

    @PostMapping("/api/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    
    @GetMapping("/api/employees")
    public List<Employee> findAllEmployees() {
        return employeeRepository.findAllEmployees();
    }
    
    @GetMapping("/api/employees/{employeeId}")
    public Employee findEmployeeById(
            @PathVariable("employeeId") Integer id) {
        return employeeRepository.findEmployeeById(id);
    }
    
    @PutMapping("/api/employees/{employeeId}")
    public Employee updateEmployee(
            @PathVariable("employeeId") Integer id,
            @RequestBody Employee employeeUpdates) {

        Employee employee = employeeRepository.findEmployeeById(id);

        employee.setFirstName(employeeUpdates.getFirstName());
        employee.setLastName(employeeUpdates.getLastName());
        employee.setDateOfBirth(employeeUpdates.getDateOfBirth());
        employee.setEmail(employeeUpdates.getEmail());
        employee.setUsername(employeeUpdates.getUsername());
        employee.setPassword(employeeUpdates.getPassword());
        employee.setStartDate(employeeUpdates.getStartDate());
        employee.setAirline(employeeUpdates.getAirline());
        employee.setRole(employeeUpdates.getRole());
        employee.setManager(employeeUpdates.getManager());

        return employeeRepository.save(employee);
    }
    
    @DeleteMapping("/api/employees/{employeeId}")
    public void deleteEmployee(
            @PathVariable("employeeId") Integer id) {
        employeeRepository.deleteById(id);
    }
}