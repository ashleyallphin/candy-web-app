-- Create the database burgers_db.
CREATE DATABASE candy_db;
USE candy_db;

-- Create the table burgers.
CREATE TABLE candy
(
    id INT NOT NULL AUTO_INCREMENT,
    candy_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);