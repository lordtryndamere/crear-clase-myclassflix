'use strict'
var express = require('express');

//var auth = require('../middlewares/auth');
var classesController = require('../controller/classController')
var classes = express.Router();



//classess

classes.post('/:topic',classesController.createClass);









module.exports = classes