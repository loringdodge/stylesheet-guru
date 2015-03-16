var r = require('./RethinkConnect');

var RethinkUtils = {

	getDemoByUrl: function(url){
		return r.db('guru').table('demos')
	    .filter({url: url})
	    .limit(1)
	    .run(r.connection)
	    .then(function(cursor){
	      return cursor.toArray();
	    })
	}

}

module.exports = RethinkUtils;