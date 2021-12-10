package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="trips")
public class TaskAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer employee;
    private Integer task;


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

    public TaskAssignment(Integer id, Integer employee, Integer task) {
        this.id = id;
        this.employee = employee;
        this.task = task;
    }

    public TaskAssignment() {}
}
