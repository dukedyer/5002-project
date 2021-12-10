package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="statuses")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String status;

    public String getStatus() { return this.status; }
    public void setStatus(String status) { this.status = status; }

    public Status(String status) {
        this.status = status;
    }

    protected Status() {}
}
