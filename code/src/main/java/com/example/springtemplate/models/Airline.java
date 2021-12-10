package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="airlines")
public class Airline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String airline;

    public String getAirline() { return this.airline; }
    public void setAirline(String airline) { this.airline = airline; }

    public Airline(String airline) {
        this.airline = airline;
    }

    protected Airline() {}
}
