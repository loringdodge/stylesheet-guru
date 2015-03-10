var r = require('../db/rethink/');

var ApiController = {

	findDemoByName: function(req, res){
		var title = req.path;
		
		r.db('guru').table('demos')
	    .filter({url: 'demo'}).limit(1)
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    })
	    .then(function(data){
	    	console.log("[INFO] RethinkDB: foundDemoByName - > Successfully found %s",
	    		req.path);
	      res.status(200).json(markup);
	    })
	    .catch(function (err) {
		    console.log("[ERROR] RethinkDB: findDemoByName -> Can't find %s (%s:%s)\n%s",
		      req.path, error.name, error.msg, error.message);
		    return res.status(400).end();
		  });
	}

};

module.exports = ApiController;