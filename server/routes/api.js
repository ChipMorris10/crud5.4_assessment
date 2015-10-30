var express = require('express');
var router = express.Router();
var Student = require('../models/student.js');

// POST ONE student
router.post('/students', function(req, res, next) {
  new Student ({
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
    married: req.body.married
  })
  .saveQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ONE student
router.get('/student/:id', function(req, res, next){
  Student.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ALL students
router.get('/students', function(req, res, next){
  Student.findQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// UPDATE ONE student
router.put('/student/:id', function(req, res, next) {
  Student.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// DELETE ONE student
router.delete('/student/:id', function(req, res, next){
  Student.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});







module.exports = router;
