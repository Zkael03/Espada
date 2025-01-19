CREATE DATABASE espada_db;
USE espada_db;

CREATE TABLE users  (
  id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  nomor_telepon VARCHAR(20),
  password VARCHAR(255) NOT NULL
);


