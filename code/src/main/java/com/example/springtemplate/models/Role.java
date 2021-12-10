package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String role;

    public String getRole() { return this.role; }
    public void setRole(String role) { this.role = role; }

    public Role(String role) {
        this.role = role;
    }

    protected Role() {}
}
