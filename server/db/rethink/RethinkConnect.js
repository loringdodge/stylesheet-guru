var r = require('rethinkdb');

////////// DB Config //////////
var dbConfig = {
  host: 'localhost',
  port: 28015,
  db  : 'guru'
};

////////// Connect to RethinkDB //////////
r.connections = [];

r.connect(dbConfig)
  .then(function(connection){
    r.connection = connection;
    r.connection.use(dbConfig.db);
    console.log("[INFO] RethinkDB: Connected successfully");
    return r;
  })
  .catch(function(error){
    console.log("[ERROR] RethinkDB: Can't connect. (%s:%s)\n%s",
      dbConfig.db, error.name, error.msg, error.message);
  })

module.exports = r;



