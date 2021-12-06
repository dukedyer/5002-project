package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;
import java.time.Instant;

import com.example.springtemplate.repositories.UserRestRepository;

@Entity
@Table(name="passengers")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date createdDate;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Date getCreatedDate() { return createdDate; }
    public void setCreatedDate(Date createdDate) { this.createdDate = createdDate; }


    public Passenger(Integer userId, Date createdDate) {
        this.id = userId;
        this.createdDate = Date.valueOf(Instant.now().toString());
    }

    public Passenger() {}
}
