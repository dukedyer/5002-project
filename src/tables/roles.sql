DROP TABLE IF EXISTS `db_design`.`roles`;
CREATE TABLE `db_design`.`roles` (
  `role` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`role`));
INSERT INTO `db_design`.`roles` (`role`) VALUES ('FIGHT ATTENDANT');
INSERT INTO `db_design`.`roles` (`role`) VALUES ('GATE ATTENDANT');
INSERT INTO `db_design`.`roles` (`role`) VALUES ('MANAGER');
INSERT INTO `db_design`.`roles` (`role`) VALUES ('PILOT');

