var mongo = require('mongo');
var logMessage = require('debug')('mongo:debug')
var logerror = require('debug')('mongo:error');

var mongoUtils = {

	setup: function(){
		mongo.connect('mongodb://localhost/guru', function(err, db) {
		  if(!err) {
		    console.log("We are connected");
		  }
		});
	}


}

module.exports = mongoUtils;