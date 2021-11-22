DROP TABLE IF EXISTS `db_design`.`planes`;
CREATE TABLE `db_design`.`planes` (
 `searial_number` INT NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(30),
 `airline` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`serial_number`),
 CONSTRAINT `airline_owns_plane`
   FOREIGN KEY (`airline`)
   REFERENCES `db_design`.`airlines` (`airline`)
   ON DELETE RESTRICT /* A new airline must be set on the project before the previous airline is deleted */
   ON UPDATE CASCADE);