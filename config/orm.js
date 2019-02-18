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
    var queryString = "UPDATE discs SET thrown = ? WHERE id = ?";
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
  },
  deleteOne: function(id, cb) {
    var queryString = "DELETE FROM discs WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      cb(result);
    });
  },
  resetAll: function(cb) {
    var queryString = "UPDATE discs SET thrown = false WHERE thrown = true";
    connection.query(queryString, function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;
