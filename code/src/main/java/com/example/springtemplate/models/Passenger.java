package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name="passengers")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    private Timestamp createdDate;

    public Integer getUserId() { return userId; }
    public void setUserId(Integer id) { this.userId = id; }

    public Timestamp getCreatedDate() { return createdDate; }
    public void setCreatedDate(Timestamp createdDate) { this.createdDate = createdDate; }


    public Passenger(Integer userId, Timestamp createdDate) {
        this.userId = userId;
        this.createdDate = createdDate;
    }

    public Passenger(Integer userId) {
        this.userId = userId;
        this.createdDate = Timestamp.valueOf(Instant.now().toString());
    }

    public Passenger() {}
}
