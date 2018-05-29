
CREATE SCHEMA `emails_and_groups` ;

CREATE TABLE `emails_and_groups`.`emails_groups` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `group` BIGINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

ALTER TABLE `emails_and_groups`.`emails_groups` 
CHANGE COLUMN `email` `email` VARCHAR(45) NOT NULL,
DROP PRIMARY KEY,
ADD PRIMARY KEY (`id`, `email`);


insert into emails_groups(`email`, `group`) values 
('testme@gmail.com', 13),
('testme@gmail.com', 50),
('luelher@gmail.com', 10),
('luelher@gmail.com', 20),
('luelher@gmail.com', 40);

