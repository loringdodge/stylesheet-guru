var express = require('express');
var PageController = require('./PageController');

var PageRouter = express.Router();

PageRouter.get('/', PageController.getHomePage);
PageRouter.get('/demo/:url', PageController.getDemoPage);

module.exports = PageRouter;