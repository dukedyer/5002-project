package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Status;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StatusRestRepository
        extends CrudRepository<Status, String> {
    @Query(value = "SELECT * FROM statuses",
            nativeQuery = true)
    public List<Status> findAllStatuses();
    @Query(value = "SELECT * FROM statuses WHERE status=:statusId",
            nativeQuery = true)
    public Status findStatusById(@Param("statusId") String id);
}
