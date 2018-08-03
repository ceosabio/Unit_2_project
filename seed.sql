INSERT INTO food (id, name, genre, calories, course_id)
VALUES 
(1, 'hambburger', 'fast food',550, 1), 
(2, 'pizza', 'fast food', 600, 1), 
(3, 'hot dog', 'fast food', 450, 1),
(4, 'french fries', 'fast food', 550, 2),
(5, 'coleslaw', 'home food', 250, 2);

INSERT INTO course (id, name)
VALUES
(1, 'entree'),
(2, 'side'),
(3, 'beverage');

INSERT INTO drink (id, name, genre, calories, course_id)
VALUES
(1, 'root beer', 'soda', 560, 3),
(2, 'pineapple juice', 'fruit juice' 350, 3),
(3, 'green smoothie', 'fruit juice' 250, 3);