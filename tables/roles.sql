DROP TABLE IF EXISTS `db_final_project`.`roles`;
CREATE TABLE `db_final_project`.`roles` (
  `role` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`role`));
INSERT INTO `db_final_project`.`roles` (`role`) VALUES ('FIGHT ATTENDANT');
INSERT INTO `db_final_project`.`roles` (`role`) VALUES ('GATE ATTENDANT');
INSERT INTO `db_final_project`.`roles` (`role`) VALUES ('MANAGER');
INSERT INTO `db_final_project`.`roles` (`role`) VALUES ('PILOT');

