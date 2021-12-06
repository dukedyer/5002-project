package com.example.springtemplate.models;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer passenger;
    private Timestamp boardingTime;
    private Integer boardingGroup;
    private Integer gate;
    private Integer trip;
    private Integer planeId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPassenger() {
        return passenger;
    }

    public void setPassenger(Integer passengerId) {
        this.passenger = passengerId;
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

    public Integer getTrip() {
        return trip;
    }

    public void setTrip(Integer tripId) {
        this.trip = tripId;
    }

    public Integer getPlaneId() {
        return planeId;
    }

    public void setPlaneId(Integer planeId) {
        this.planeId = planeId;
    }

    public Ticket(Integer passenger, Timestamp boardingTime, Integer boardingGroup, Integer gate, Integer trip, Integer planeId) {
        this.passenger = passenger;
        this.boardingTime = boardingTime;
        this.boardingGroup = boardingGroup;
        this.gate = gate;
        this.trip = trip;
        this.planeId = planeId;
    }

    public Ticket() {}
}
