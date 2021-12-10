package com.example.springtemplate.daos;

import com.example.springtemplate.models.Status;
import com.example.springtemplate.repositories.StatusRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StatusRestOrmDao {
    @Autowired
    StatusRestRepository statusRepository;

    @PostMapping("/api/statuses")
    public Status createStatus(@RequestBody Status status) {
        return statusRepository.save(status);
    }
    
    @GetMapping("/api/statuses")
    public List<Status> findAllStatuses() {
        return statusRepository.findAllStatuses();
    }
    
    @GetMapping("/api/statuses/{statusId}")
    public Status findStatusById(
            @PathVariable("statusId") String id) {
        return statusRepository.findStatusById(id);
    }
    
    @PutMapping("/api/statuses/{statusId}")
    public Status updateStatus(
            @PathVariable("statusId") String id,
            @RequestBody Status statusUpdates) {
        Status status = statusRepository.findStatusById(id);

        status.setStatus(statusUpdates.getStatus());

        return statusRepository.save(status);
    }
    
    @DeleteMapping("/api/statuses/{statusId}")
    public void deleteStatus(
            @PathVariable("statusId") String id) {
        statusRepository.deleteById(id);
    }
}