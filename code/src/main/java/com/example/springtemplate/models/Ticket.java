package com.example.springtemplate.models;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Time;
import java.sql.Timestamp;

@Entity
@Table(name="tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer userId;
    private Timestamp boardingTime;
    private Integer boardingGroup;
    private Integer gate;
    private Integer tripId;
    private Integer planeId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer passengerId) {
        this.userId = passengerId;
    }

    public Timestamp getBoardingTime() {
        return boardingTime;
    }

    public void setBoardingTime(Timestamp boardingTime) {
        this.boardingTime = boardingTime;
    }

    public Integer getBoardingGroup() {
        return boardingGroup;
    }

    public void setBoardingGroup(Integer boardingGroup) {
        this.boardingGroup = boardingGroup;
    }

    public Integer getGate() {
        return gate;
    }

    public void setGate(Integer gate) {
        this.gate = gate;
    }

    public Integer getTripId() {
        return tripId;
    }

    public void setTripId(Integer tripId) {
        this.tripId = tripId;
    }

    public Integer getPlaneId() {
        return planeId;
    }

    public void setPlaneId(Integer planeId) {
        this.planeId = planeId;
    }

    public Ticket(Integer userId, Timestamp boardingTime, Integer boardingGroup, Integer gate, Integer tripId, Integer planeId) {
        this.userId = userId;
        this.boardingTime = boardingTime;
        this.boardingGroup = boardingGroup;
        this.gate = gate;
        this.tripId = tripId;
        this.planeId = planeId;
    }

    public Ticket() {}
}
