const db = require('../connection');

module.exports = {
  findAll() {
    return db.query(`
    SELECT * FROM food
    `);
  },

  findById(id) {
    return db.one(`
    SELECT * FROM food
    WHERE id = $1
    `, id);
  },

  save(food) {
    return db.one(`
    INSERT INTO food
    (name, genre, calories, course_id)
    VALUES
    ($/name/, $/genre/, $/calories/, $/course_id/)
    RETURNING *
    `, food);
  },

  delete(id) {
    return db.query(`
    DELETE FROM food
    WHERE id = $1
    `, id);
  },

  update(food) {
    return db.query(`
    UPDATE food
    SET 
      name = $2, 
      genre = $3,
      calories = $4
    WHERE id = $1
    RETURNING *
    `, [food.id, food.name, food.genre, food.calories, food.course_id]);
  },
};
//module.exports.findById(2).then(food => console.log(food));
//module.exports.findAll().then(food => console.log(food));
//module.exports.update({id: 4, name: 'pasta', genre: 'starch', calories: 200 }).then(food => console.log(food));
// module.exports.destroy(1).then(food => console.log(food));
module.exports.save({name: 'salad', genre: 'greens', calories: 150, course_id: 3}).then(food => console.log(food));

//console.log(module.exports);