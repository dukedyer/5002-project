DROP TABLE IF EXISTS `db_final_project`.`passengers`;
CREATE TABLE `db_final_project`.`passengers` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`id`),
 FOREIGN KEY (`id`) REFERENCES `db_final_project`.`users`(`id`));