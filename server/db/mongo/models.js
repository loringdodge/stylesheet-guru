var mongoose = require('mongoose');

var demoSchema = new mongoose.Schema({
	name: String,
	desc: String,
	css: String,
	html: String,
	timestamp: {type: Date, default: Date.now}
})

var demoModel = mongoose.model('demo', demoSchema);

module.exports = demoModel;