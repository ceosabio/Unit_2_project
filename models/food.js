const db = require('../connection');

module.exports = {
  findAll() {
    return db.query(`
    SELECT * FROM food
    `);
  },

  findOne(id) {
    return db.one(`
    SELECT * FROM food
    WHERE course_id = $1
    `, id);
  },

  create(foodData) {
    return db.one(`
    INSERT INTO food
    (name, description)
    VALUES
    ($1, $2)
    RETURNING *
    `, [foodData.name, foodData.description]);
  },

  delete(id) {
    return db.query(`
    DELETE FROM food
    WHERE food_id = $1
    `, id);
  },

  update(id, foodData) {
    return db.query(`
    UPDATE food
    SET 
      name = $2, 
      description =$3
    WHERE food_id = $1
    RETURNING *
    `, [id, foodData.name, foodData.description]);
  },
};

//module.exports.findById(1).then(food => console.log(food));
 module.exports.findAll().then(food => console.log(food));
 //module.exports.save({name: 'ggg', description: 'tasty'}).then(food => console.log(food));
 //module.exports.destroy(1).then(food => console.log(food));