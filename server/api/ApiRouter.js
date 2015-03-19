var express = require('express');
var ApiController = require('./ApiController');

var ApiRouter = express.Router();

ApiRouter.get('/demos/:title?', ApiController.getDemosByTitle);
ApiRouter.get('/demo/:url', ApiController.getDemoByPath);

module.exports = ApiRouter;
