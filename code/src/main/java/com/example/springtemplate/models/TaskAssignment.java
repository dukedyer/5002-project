package com.example.springtemplate.models;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="task_assignments")
public class TaskAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer employee;
    private Integer task;
    private Date date;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEmployee() {
        return employee;
    }

    public void setEmployee(Integer employee) {
        this.employee = employee;
    }

    public Integer getTask() {
        return task;
    }

    public void setTask(Integer task) {
        this.task = task;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDate() {
        return this.date;
    }


    public TaskAssignment(Integer employee, Integer task, Date date) {
        this.employee = employee;
        this.task = task;
        this.date = date;
    }

    public TaskAssignment() {}
}
