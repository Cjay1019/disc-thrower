const express = require("express");

const router = express.Router();

const disc = require("../models/disc.js");

router.get("/", function(req, res) {
  disc.all(function(data) {
    var hbsObject = {
      discs: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/newdisc", function(req, res) {
  disc.create(req.body.disc_name, req.body.thrown, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/discs/:id", function(req, res) {
  disc.update(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/discs/:id", function(req, res) {
//   disc.delete(req.params.id, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

router.put("/api/reset", function(req, res) {
  disc.reset(function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
