DROP TABLE IF EXISTS `db_final_project`.`users`;
CREATE TABLE `db_final_project`.`users` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `first_name` VARCHAR(45) NULL,
 `last_name` VARCHAR(45) NULL,
 `username` VARCHAR(45) NOT NULL,
 `password` VARCHAR(45) NOT NULL,
 `email` VARCHAR(45) NULL,
 `date_of_birth` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`));