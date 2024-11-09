const db = require('../Config/db');

const Hotel = {
  addHotel: (name, location, callback) => {
    const query = 'INSERT INTO hotels (name, location) VALUES (?, ?)';
    db.query(query, [name, location], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  deleteHotel: (id, callback) => {
    const query = 'DELETE FROM hotels WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getAllHotels: (callback) => {
    const query = 'SELECT * FROM hotels';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },
};

module.exports = Hotel;
