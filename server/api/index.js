var express = require('express');
var q = require('q');
var ApiController = require('./apiController');

var ApiRouter = express.Router();

ApiRouter.get('/*', ApiController.findDemoByName);

module.exports = ApiRouter;
