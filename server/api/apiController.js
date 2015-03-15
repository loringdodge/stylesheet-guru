var r = require('../db/RethinkConnect');

var data = require('./data');

var ApiController = {

	findDemosByTitle: function(req, res){
		var title = req.params.title;
		
		if(title !== undefined){
			r.db('guru').table('demos')
		    .filter(function(doc){
				  return doc('url').match(title);
				})
		    .run(r.connection)
		    .then(function(cursor){
		      return cursor.toArray();
		    })
		    .then(function(data){
		    	console.log("[INFO] RethinkDB: foundDemosByTitle - > Successfully found %s",
		    		req.title);
		      res.status(200).json(data);
		    })
		    .catch(function (error) {
			    console.log("[ERROR] RethinkDB: foundDemosByTitle -> Can't find %s (%s:%s)\n%s",
			      req.title, error.name, error.msg, error.message);
			    return res.status(400).end();
			  });

		} else {
			r.db('guru').table('demos')
		    .run(r.connection)
		    .then(function(cursor){
		      return cursor.toArray();
		    })
		    .then(function(data){
		    	console.log("[INFO] RethinkDB: foundDemosByTitle - > Successfully found %s",
		    		req.path);
		    	console.log(data);
		      res.status(200).json(data);
		    })
		    .catch(function (error) {
			    console.log("[ERROR] RethinkDB: foundDemosByTitle -> Can't find %s (%s:%s)\n%s",
			      req.path, error.name, error.msg, error.message);
			    return res.status(400).end();
			  });
		}

	},

	findDemoByUrl: function(req, res){
		var url = req.params.url;

		r.db('guru').table('demos')
	    .filter({url: url})
	    .limit(1)
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    })
	    .then(function(data){
	    	console.log("[INFO] RethinkDB: findDemoById - > Successfully found %s",
	    		req.id);
	      res.status(200).json(data);
	    })
	    .catch(function (error) {
		    console.log("[ERROR] RethinkDB: findDemoById -> Can't find %s (%s:%s)\n%s",
		      req.id, error.name, error.msg, error.message);
		    return res.status(400).end();
		  });

	},

	emptyDemos: function(req, res){

		r.db('guru').tableDrop('demos')
			.run(r.connection)
	    .then(function(data){
	    	console.log("[INFO] RethinkDB: emptyDB - > Successfully deleted");
	      res.status(200).json(data);
	    })
	    .catch(function (error) {
		    console.log("[ERROR] RethinkDB: emptyDB -> There was an error %s (%s:%s)\n%s",
		      req.path, error.name, error.msg, error.message);
		    return res.status(400).end();
		  });
	},

	createDemos: function(req, res){

		r.db('guru').tableCreate('demos')
			.run(r.connection)
	    .then(function(data){
	    	console.log("[INFO] RethinkDB: createDB - > Successfully created");
	      res.status(200).json(data);
	    })
	    .catch(function (error) {
		    console.log("[ERROR] RethinkDB: createDB -> There was an error %s (%s:%s)\n%s",
		      req.path, error.name, error.msg, error.message);
		    return res.status(400).end();
		  });
	},

	seedDemos: function(req, res){

		r.db('guru').table('demos')
	    .insert(data)
	    .run(r.connection)
	    .then(function(data){
	    	console.log("[INFO] RethinkDB: seedDB - > Successfully inserted %s",
	    		req.path);
	      res.status(200).json(data);
	    })
	    .catch(function (error) {
		    console.log("[ERROR] RethinkDB: seedDB -> There was an error %s (%s:%s)\n%s",
		      req.path, error.name, error.msg, error.message);
		    return res.status(400).end();
		  });
	}



};

module.exports = ApiController;