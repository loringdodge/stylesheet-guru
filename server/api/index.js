var express = require('express');
var q = require('q');
var ApiController = require('./apiController');

var ApiRouter = express.Router();

ApiRouter.get('/demos/:title?', ApiController.findDemosByTitle);
ApiRouter.get('/demo/:id'), ApiController.findDemoById);

module.exports = ApiRouter;
