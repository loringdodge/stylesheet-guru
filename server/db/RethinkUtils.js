var r = require('./RethinkConnect');

var RethinkUtils = {

	getDemoByUrl: function(url){
		return r.db('guru').table('demos')
	    .filter({url: url})
	    .limit(1)
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    });
	},

	getDemosByTitle: function(title){
		if(title !== undefined){
			return r.db('guru').table('demos')
		    .filter(function(doc){
				  return doc('url').match(title);
				})
		    .run(r.connection)
		    .then(function(cursor){
		      return cursor.toArray();
		    });
		} else {
			return this.getAllDemos();
		}
	},

	getAllDemos: function(){
		return r.db('guru').table('demos')
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    });
	}

}

module.exports = RethinkUtils;