const connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM discs";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(thrown, id, cb) {
    var queryString = "UPDATE discs SET thrown = ? WHERE disc_id = ?";
    connection.query(queryString, [thrown, id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(name, thrown, cb) {
    var queryString = "INSERT INTO discs (disc_name, thrown) VALUES (?, ?)";
    connection.query(queryString, [name, thrown], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
