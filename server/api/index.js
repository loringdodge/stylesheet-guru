var express = require('express');
var q = require('q');
var ApiController = require('./apiController');

var ApiRouter = express.Router();

ApiRouter.get('/demo', ApiController.findDemosByTitle);

module.exports = ApiRouter;
