var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  db.burgers.findAll({}).then(function(data){
    var burgersObj = { 
      burgers: data 
    };
    res.render('index', burgersObj);
  });
});

router.post('/burger/create', function (req, res) {
  db.burgers.create({
    burger_name: req.body.burger_name
  }).then(function(data){
    res.redirect('/index');
  });
});


router.post('/burger/eat/:id', function (req, res) {
  db.burgers.update({
    devoured: 1,
    burger_id: req.params.id
  },
  {
    where: {id: req.params.id}
  }).then(function(data){
    res.redirect('/index');
  });
});

module.exports = router;