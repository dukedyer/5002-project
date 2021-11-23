DROP TABLE IF EXISTS `db_final_project`.`airlines`;
CREATE TABLE `db_final_project`.`airlines` (
  `airline` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`airline`));
INSERT INTO `db_final_project`.`airlines` (`airline`) VALUES ('AMERICAN');
INSERT INTO `db_final_project`.`airlines` (`airline`) VALUES ('DELTA');
INSERT INTO `db_final_project`.`airlines` (`airline`) VALUES ('SOUTHWEST');