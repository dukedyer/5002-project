DROP TABLE IF EXISTS `db_design`.`airlines`;
CREATE TABLE `db_design`.`airlines` (
  `airline` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`airline`));
INSERT INTO `db_design`.`airlines` (`airline`) VALUES ('AMERICAN');
INSERT INTO `db_design`.`airlines` (`airline`) VALUES ('DELTA');
INSERT INTO `db_design`.`airlines` (`airline`) VALUES ('SOUTHWEST');


