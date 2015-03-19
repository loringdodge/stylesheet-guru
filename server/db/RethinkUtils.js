var r = require('./RethinkConnect');

var RethinkUtils = {

	findDemoByPath: function(path){
		return r.db('guru').table('demos')
	    .filter({url: path})
	    .limit(1)
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    })
	    .then(function(demo){
	    	console.log(demo)
	    	return demo[0];
	    })
	},

	findDemosByTitle: function(title){
		if(title !== undefined){
			return r.db('guru').table('demos')
		    .filter(function(doc){
				  return doc('url').match(title.toLowerCase());
				})
		    .run(r.connection)
		    .then(function(cursor){
		      return cursor.toArray();
		    });
		} else {
			return this.findAllDemos();
		}
	},

	findAllDemos: function(){
		return r.db('guru').table('demos')
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    });
	}

}

module.exports = RethinkUtils;