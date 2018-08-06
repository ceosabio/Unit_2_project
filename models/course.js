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

  delete(id) {
    return db.query(`
    DELETE FROM course
    WHERE id = $1
    `, id);
  },

  update(course) {
    return db.one(`
    UPDATE course
    SET 
      name = $/name/ 
      WHERE id = $/id/
      RETURNING *
    `, course);
  },
};

// findById script --works
//module.exports.findById(2).then(course => console.log(course));

// findAll script --works
//module.exports.findAll().then(course => console.log(course));

// update script --not working
   module.exports.update({id: 4, name: 'appetizer'}).then(course => console.log(course));

// delete script --works but how does it know to delete the last item added? 
// module.exports.delete(5).then(course => console.log(course));

// save script --works
// module.exports.save({name: 'dessert'}).then(course => console.log(course));

// console.log(module.exports);