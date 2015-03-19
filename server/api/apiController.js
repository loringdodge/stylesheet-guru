var r = require('../db/RethinkConnect');

var RethinkUtils = require('../db/RethinkUtils');

var ApiController = {

	getDemosByTitle: function(req, res){
		var title = req.params.title;

		RethinkUtils.findDemosByTitle(title)
			.then(function(data){
				console.log("[INFO] RethinkDB: findDemosByTitle - > Successfully found %s",
	    		req.title);
	      res.status(200).json(data);
			})
			.catch(function(error){
				console.log("[ERROR] RethinkDB: findDemosByTitle -> Can't find %s (%s:%s)\n%s",
		      req.title, error.name, error.msg, error.message);
		    return res.status(400).end();
			})

	},

	getDemoByPath: function(req, res){
		var url = req.params.url;

		RethinkUtils.findDemoByPath(url)
			.then(function(data){
				console.log("[INFO] RethinkDB: findDemoByUrl - > Successfully found %s",
	    		req.id);
	      res.status(200).json(data);
			})
			.catch(function(error){
				console.log("[ERROR] RethinkDB: findDemoByUrl -> Can't find %s (%s:%s)\n%s",
		      req.id, error.name, error.msg, error.message);
		    return res.status(400).end();
			})

	}

};

module.exports = ApiController;