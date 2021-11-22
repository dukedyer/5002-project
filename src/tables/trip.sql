/*

Should this table represent an individial trip at a specific time?
Or should it represent a specific route that an airline can run (independent of time)?

*/

DROP TABLE IF EXISTS `db_design`.`trips`;
CREATE TABLE `db_design`.`trips` (
 `origin` VARCHAR(30) NOT NULL,
 `destination` VARCHAR(30) NOT NULL,
 `airline` VARCHAR(30) NOT NULL,
 `departure_time` DATETIME,
  PRIMARY KEY (`origin`, `destination`, `airline`, `departure_time`),
 CONSTRAINT `airline_manages_trip`
   FOREIGN KEY (`airline`)
   REFERENCES `db_design`.`airlines` (`airline`)
   ON DELETE RESTRICT /* A new airline must be set on the project before the previous airline is deleted */
   ON UPDATE CASCADE);