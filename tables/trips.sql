DROP TABLE IF EXISTS `db_final_project`.`trips`;
CREATE TABLE `db_final_project`.`trips` (
 `id` INT NOT NULL AUTO_INCREMENT, 
 `origin` VARCHAR(30) NULL,
 `destination` VARCHAR(30) NULL,
 `airline` VARCHAR(30) NULL,
  PRIMARY KEY (`id`),
 CONSTRAINT `trip_2_airline`
   FOREIGN KEY (`airline`)
   REFERENCES `db_final_project`.`airlines` (`airline`)
   ON DELETE CASCADE 
   ON UPDATE CASCADE);