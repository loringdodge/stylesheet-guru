var models = require('./models');
var db = require('./schema');

var collections = {};

collections.Demos = db.Collection.extend({
	model: models.Demo
});

module.exports = collections;