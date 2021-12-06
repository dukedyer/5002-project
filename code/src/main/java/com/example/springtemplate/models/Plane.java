package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;
import java.time.Instant;

@Entity
@Table(name="planes")
public class Plane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer serialNumber;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public Integer getSerialNumber() {return serialNumber; }
    public void setSerialNumber(Integer serialNumber) {this.serialNumber = serialNumber; }

    public Plane(String name, Integer serialNumber) {
        this.name = name;
        this.serialNumber = serialNumber;
    }

    public Plane() {}
}
