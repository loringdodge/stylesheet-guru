var db = require('./schema');

var models = {};

models.User = db.Model.extend({
	tableName : 'demos',
});

module.exports = models;