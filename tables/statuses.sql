DROP TABLE IF EXISTS `db_final_project`.`statuses`;
CREATE TABLE `db_final_project`.`statuses` (
  `status` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`status`));
INSERT INTO `db_final_project`.`statuses` (`status`) VALUES ('NOT STARTED');
INSERT INTO `db_final_project`.`statuses` (`status`) VALUES ('IN PROGRESS');
INSERT INTO `db_final_project`.`statuses` (`status`) VALUES ('COMPLETE');
INSERT INTO `db_final_project`.`statuses` (`status`) VALUES ('BLOCKED');

