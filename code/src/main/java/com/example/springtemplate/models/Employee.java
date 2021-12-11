package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name="employees")
@PrimaryKeyJoinColumn(name = "id")
public class Employee extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Date startDate;
    private String role;
    private String airline;
    private Integer manager;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public Integer getManager() {
        return manager;
    }

    public void setManager(Integer manager) {
        this.manager = manager;
    }

    public Employee(Integer id, Date startDate, String role, String airline, Integer manager) {
        this.id = id;
        this.startDate = startDate;
        this.role = role;
        this.airline = airline;
        this.manager = manager;
    }

    public Employee() {}
}
