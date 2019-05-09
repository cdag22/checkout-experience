-- CREATE DATABASE shoppers;

USE shoppers;

CREATE TABLE shopper
(
  id INT
  AUTO_INCREMENT,
  name VARCHAR
  (40),
  email VARCHAR
  (60),
  password VARCHAR
  (20),
  cityState VARCHAR
  (60),
  zipCode INT,
  phoneNumber VARCHAR
  (10),
  creditCard VARCHAR
  (20),
  expirationDate DATETIME,
  cvv INT,
  billingZipCode INT,
  PRIMARY KEY
  (ID)
);