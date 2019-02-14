DROP DATABASE IF EXISTS discs_db;
CREATE database discs_db;

USE discs_db;

CREATE TABLE discs
(
    disc_id INT NOT NULL
    AUTO_INCREMENT,
  disc_name VARCHAR
    (100) NULL,
  thrown BOOLEAN NULL,
  PRIMARY KEY
    (disc_id)
);