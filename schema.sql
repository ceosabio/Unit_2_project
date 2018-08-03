DROP TABLE IF EXISTS food, course, drink;
 
CREATE TABLE food (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  genre VARCHAR(255),
  calories INTEGER,
  course_id INT REFERENCES course(id)
);

CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE drink (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  genre VARCHAR(255),
  calories INTEGER,
  course_id INT REFERENCES course(id)
);