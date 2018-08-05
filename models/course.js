const db = require('../connection');

module.exports = {
  findAll() {
    return db.query(`
    SELECT * FROM course
    `);
  },

  findById(id) {
    return db.one(`
    SELECT * FROM course
    WHERE id = $1
    `, id);
  },

  save(course) {
    return db.one(`
    INSERT INTO course
    (name)
    VALUES
    ($1)
    RETURNING *
    `, [course.name]);
  },

//   delete(id) {
//     return db.query(`
//     DELETE FROM course
//     WHERE id = $1
//     `, id);
//   },

//   update(course) {
//     return db.query(`
//     UPDATE course
//     SET 
//       name = $1, 
//       WHERE id = $1
//       RETURNING *
//     `, [course.name]);
//   },
};

// findById script works
//module.exports.findById(2).then(course => console.log(course));

// findAll script works
//module.exports.findAll().then(course => console.log(course));

// update script --not working
// module.exports.update({name: 'dessert',}).then(food => console.log(food));

// delete script
//module.exports.delete(13).then(course => console.log(course));

// save script
   module.exports.save({name: 'dessert'}).then(course => console.log(course));

//console.log(module.exports);