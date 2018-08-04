const pgp = require('pg-promise')();

const opts = {
  database: 'food_db',
};

const db = pgp(opts);

module.exports = db;