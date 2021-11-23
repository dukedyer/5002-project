DROP TABLE IF EXISTS `db_final_project`.`tickets`;
CREATE TABLE `db_final_project`.`tickets` (
 `id` INT NOT NULL AUTO_INCREMENT, 
 `passenger` INT NULL,
 `boarding_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 `boarding_group` INT NULL,
 `gate` INT NULL,
 `trip` INT NULL,
 `plane_id` INT NULL,
  PRIMARY KEY (`id`),
 INDEX `tickets_to_passenger_idx` (`passenger` ASC), 
 CONSTRAINT `tickets_to_passenger`
 FOREIGN KEY (`passenger`) 
 REFERENCES `db_final_project`.`users` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE,
 INDEX `tickets_to_trip_idx` (`trip` ASC), 
 CONSTRAINT `tickets_to_trip`
 FOREIGN KEY (`trip`) 
 REFERENCES `db_final_project`.`trips` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE,
 INDEX `tickets_to_plane_idx` (`plane_id` ASC), 
 CONSTRAINT `tickets_to_plane`
 FOREIGN KEY (`plane_id`) 
 REFERENCES `db_final_project`.`planes` (`id`) 
 ON DELETE CASCADE
 ON UPDATE CASCADE);