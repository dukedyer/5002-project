package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="passengers")
@PrimaryKeyJoinColumn(name = "id")
public class Passenger extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Date createdDate;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Date getCreatedDate() { return createdDate; }
    public void setCreatedDate(Date createdDate) { this.createdDate = createdDate; }


    public Passenger(Integer id, Date createdDate) {
        this.id = id;
        this.createdDate = createdDate;
    }

    public Passenger(Integer id) {
        this.id = id;
    }

    public Passenger() {}
}
