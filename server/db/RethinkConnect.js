var r = require('rethinkdb');

var ServerConstants = require('../constants/ServerConstants');
var Database = ServerConstants.Database;

////////// Connect to RethinkDB //////////
r.connections = [];

r.connect(Database)
  .then(function(connection){
    r.connection = connection;
    console.log("[INFO] RethinkDB: Connected successfully");
    return r;
  })
  .catch(function(error){
    console.log("[ERROR] RethinkDB: Can't connect. (%s:%s)\n%s",
      dbConfig.db, error.name, error.msg, error.message);
  })

module.exports = r;



