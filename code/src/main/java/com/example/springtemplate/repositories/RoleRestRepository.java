package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoleRestRepository
        extends CrudRepository<Role, String> {
    @Query(value = "SELECT * FROM roles",
            nativeQuery = true)
    public List<Role> findAllRoles();
    @Query(value = "SELECT * FROM roles WHERE role=:roleId",
            nativeQuery = true)
    public Role findRoleById(@Param("roleId") String id);
}
