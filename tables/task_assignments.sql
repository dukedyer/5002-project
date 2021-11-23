DROP TABLE IF EXISTS `db_final_project`.`task_assignments`;
CREATE TABLE `db_final_project`.`task_assignments` (
 `id` INT NOT NULL AUTO_INCREMENT, 
 `employee` INT NULL,
 `task` INT NULL,
  PRIMARY KEY (`id`),
 INDEX `tasks_assignments_to_employee_idx` (`employee` ASC), 
 CONSTRAINT `tasks_assignments_to_employee`
 FOREIGN KEY (`employee`) 
 REFERENCES `db_final_project`.`employees` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE,
 INDEX `tasks_assignments_to_task_idx` (`task` ASC), 
 CONSTRAINT `tasks_assignments_to_task`
 FOREIGN KEY (`task`) 
 REFERENCES `db_final_project`.`tasks` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE);