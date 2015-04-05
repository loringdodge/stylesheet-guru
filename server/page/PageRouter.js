var express = require('express');
var PageController = require('./PageController');

var PageRouter = express.Router();

PageRouter.get('/', PageController.initializePage);
PageRouter.get('/demo/:url', PageController.initializePage);

module.exports = PageRouter;