var knex = require('knex');
var logMessage = require('debug')('rdb:debug')
var logerror = require('debug')('rdb:error');

// DB config connection
var config = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'guru',
		charset: 'utf8'
	}
}

var db = knex(config);

// Create tables if they do not exist already
db.schema.hasTable('demos').then(function(exists){
	if(exists){
		logMessage('[DEBUG] MySQL table %s already exists', 'demos');
	} else {
		db.schema.createTable('demos', function(table){
			table.increments('id').primary();
			table.string('name', 255);
			table.string('desc', 2000);
			table.string('html', 10000);
			table.string('css', 10000);
			table.timetamps();
		}).then(function(table){
			logMessage('[DEBUG] MySQL table %s created successfully', 'demos');
		});
	}
});

// Export table
var bookshelf = require('bookshelf')(db);
module.exports = bookshelf;