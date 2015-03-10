var db = require('./config');

var bookshelf = require('bookshelf')(db);

var models = require('./models')(bookshelf);

var collections = require('./collections')(bookshelf);

module.exports = {
	models: models,
	collections: collections
}

