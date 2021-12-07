package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name="passengers")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Timestamp createdDate;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Timestamp getCreatedDate() { return createdDate; }
    public void setCreatedDate(Timestamp createdDate) { this.createdDate = createdDate; }


    public Passenger(Integer id, Timestamp createdDate) {
        this.id = id;
        this.createdDate = createdDate;
    }

    public Passenger(Integer id) {
        this.id = id;
        this.createdDate = Timestamp.valueOf(Instant.now().toString());
    }

    public Passenger() {}
}
