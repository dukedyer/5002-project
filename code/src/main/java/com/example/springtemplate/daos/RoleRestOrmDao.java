package com.example.springtemplate.daos;

import com.example.springtemplate.models.Role;
import com.example.springtemplate.repositories.RoleRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RoleRestOrmDao {
    @Autowired
    RoleRestRepository roleRepository;

    @PostMapping("/api/roles")
    public Role createRole(@RequestBody Role role) {
        return roleRepository.save(role);
    }
    
    @GetMapping("/api/roles")
    public List<Role> findAllRoles() {
        return roleRepository.findAllRoles();
    }
    
    @GetMapping("/api/roles/{roleId}")
    public Role findRoleById(
            @PathVariable("roleId") String id) {
        return roleRepository.findRoleById(id);
    }
    
    @PutMapping("/api/roles/{roleId}")
    public Role updateRole(
            @PathVariable("roleId") String id,
            @RequestBody Role roleUpdates) {
        Role role = roleRepository.findRoleById(id);

        role.setRole(roleUpdates.getRole());

        return roleRepository.save(role);
    }
    
    @DeleteMapping("/api/roles/{roleId}")
    public void deleteRole(
            @PathVariable("roleId") String id) {
        roleRepository.deleteById(id);
    }
}