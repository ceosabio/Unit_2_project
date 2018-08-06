-- DELETE FROM food
--seed food table
INSERT INTO course (name)
VALUES
('entree'),
('side'),
('beverage');

INSERT INTO food (name, genre, calories, course_id)
VALUES 
('hambburger', 'fast food',550, 1), 
('pizza', 'fast food', 600, 1), 
('hot dog', 'fast food', 450, 1),
('french fries', 'fast food', 550, 2),
('coleslaw', 'home food', 250, 2);

--seed course table


--seed drink table
-- INSERT INTO drink (id, name, genre, calories, course_id)
-- VALUES
-- (1, 'root beer', 'soda', 560, 3),
-- (2, 'pineapple juice', 'fruit juice' 350, 3),
-- (3, 'green smoothie', 'fruit juice' 250, 3);