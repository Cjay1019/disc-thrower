const orm = require("../config/orm.js");

var disc = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  create: function(name, thrown, cb) {
    orm.insertOne(name, thrown, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne(true, id, function(res) {
      cb(res);
    });
  },
  // delete: function(id, cb) {
  //   orm.deleteOne(id, function(res) {
  //     cb(res);
  //   });
  // },
  reset: function(cb) {
    orm.resetAll(function(res) {
      cb(res);
    });
  }
};

module.exports = disc;
