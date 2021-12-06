package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Plane;
import org.springframework.data.repository.CrudRepository;

public interface PlaneRepository
        extends CrudRepository<Plane, Integer> {
}
