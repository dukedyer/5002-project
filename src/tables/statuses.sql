DROP TABLE IF EXISTS `db_design`.`statuses`;
CREATE TABLE `db_design`.`statuses` (
  `status` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`status`));
INSERT INTO `db_design`.`statuses` (`status`) VALUES ('NOT STARTED');
INSERT INTO `db_design`.`statuses` (`status`) VALUES ('IN PROGRESS');
INSERT INTO `db_design`.`statuses` (`status`) VALUES ('COMPLETE');
INSERT INTO `db_design`.`statuses` (`status`) VALUES ('BLOCKED');

