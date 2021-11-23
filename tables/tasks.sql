DROP TABLE IF EXISTS `db_final_project`.`tasks`;
CREATE TABLE `db_final_project`.`tasks` (
 `id` INT NOT NULL AUTO_INCREMENT, 
 `status` VARCHAR(30) NULL,
 `name` VARCHAR(30) NULL,
 `trip` INT NULL,
  PRIMARY KEY (`id`),
 INDEX `tasks_to_trip_idx` (`trip` ASC), 
 CONSTRAINT `tasks_to_trip`
 FOREIGN KEY (`trip`) 
 REFERENCES `db_final_project`.`trips` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE);