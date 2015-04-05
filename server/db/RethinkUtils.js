var r = require('./RethinkConnect');

var RethinkUtils = {

  findDemoByPath: function(path){
    return r.table('demos')
      .filter({url: path})
      .limit(1)
      .run(r.connection)
      .then(function(cursor){
        return cursor.toArray();
      })
      .then(function(demo){
        return demo[0];
      })
  },

  findDemosByTitle: function(title){
    if(title !== undefined){
      return r.table('demos')
        .filter(function(doc){
          return doc('url').match(title.toLowerCase());
        })
        .run(r.connection)
        .then(function(cursor){
          return cursor.toArray();
        });
    }
    return this.findAllDemos();
  },

  findAllDemos: function(){
    return r.table('demos')
      .run(r.connection)
      .then(function(cursor){
        return cursor.toArray();
      });
  }

}

module.exports = RethinkUtils;