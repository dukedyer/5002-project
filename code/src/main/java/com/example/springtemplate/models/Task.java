package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String status;
    private String name;
    private Integer trip;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTrip() {
        return trip;
    }

    public void setTrip(Integer trip) {
        this.trip = trip;
    }

    public Task(Integer id, String status, String name, Integer trip) {
        this.id = id;
        this.status = status;
        this.name = name;
        this.trip = trip;
    }

    public Task() {}
}
