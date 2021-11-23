DROP TABLE IF EXISTS `db_final_project`.`employees`;
CREATE TABLE `db_final_project`.`employees` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `start_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
 `role` VARCHAR(30) NULL,
 `airline` VARCHAR(30) NULL,
 `manager` INT NULL,
 PRIMARY KEY (`id`),
 CONSTRAINT `employee_role`
 FOREIGN KEY (`role`)
 REFERENCES `db_final_project`.`roles` (`role`),
 CONSTRAINT `employee_airline`
 FOREIGN KEY (`airline`)
 REFERENCES `db_final_project`.`airlines` (`airline`),
 INDEX `employees_2_employees_idx`(`manager` ASC),
 CONSTRAINT `employees_2_employees`
  FOREIGN KEY (`manager`)
  REFERENCES `db_final_project`.`employees`(`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
 FOREIGN KEY (`id`) REFERENCES `db_final_project`.`users`(`id`));