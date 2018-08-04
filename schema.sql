-- DROP DATABASE IF EXISTS food_db;
-- CREATE DATABASE food_db;


DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS course;
-- DROP TABLE IF EXISTS drink;

CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE food (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  genre VARCHAR(255),
  calories INTEGER,
  course_id INT REFERENCES course(id)
);


-- CREATE TABLE drink (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   genre VARCHAR(255),
--   calories INTEGER,
--   course_id INT REFERENCES course(id)
-- );