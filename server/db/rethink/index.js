var r = require('rethinkdb');
var logMessage = require('debug')('rdb:debug')
var logerror = require('debug')('rdb:error');

var dbConfig = {
  host: process.env.RDB_HOST || 'localhost',
  port: parseInt(process.env.RDB_PORT) || 28015,
  db  : process.env.RDB_DB || 'guru',
  tables: {
    'demos': 'id',
  }
};

var sampleEntry = {
  id: "123",
  name: "Speech Bubble",
  desc: "djkfl;djak fjdksla ;fjdklsa ;fjdklsa;",
  css: "fdsafdsafd safds afdsa fdsa ",
  html: "dsafdsa fd safd saf dsa fds"
}

var dbUtils = {

  setup: function() {
    r.connect({dbConfig.host, dbConfig.port}, function(err, connection) {
      r.dbCreate(dbConfig.db).run(connection, function(err, result){      
        if(err){
          logMessage("[DEBUG] RethinkDB database '%s' already exists (%s:%s)\n%s",
            dbConfig.db, err.name, err.msg, err.message);
        } else {
          logMessage("[INFO] RethinkDB database '%s' created", dbConfig.db);
        }
      });

      // Set up all databases needed.
      for (var i in dbConfig.tables) {
        r.db(dbConfig.db).tableCreate({
          tableName: i, 
          primaryKey: dbConfig.tables[i]})
        .run(connection, function(err, results){
          if(err){
            logMessage("[DEBUG] RethinkDB table '%s' already exists (%s:%s)\n%s", 
              dbConfig.tables[i], err.name, err.msg, err.message);
          } else {
            logMessage("[INFO] RethinkDB table '%s' created successfully", dbConfig.tables[i]);
          }
        });;
      }
    });
  },

  findDemos: function(max_results, callback) {
    onConnect(function(err, connection){
      r.db(dbConfig[db]).table('demos')
        .orderBy(r.desc('timestamp'))
        .limit(max_results)
        .run(connection, function(err, cursor){
          if(err){
            logerror("[ERROR][%s][findDemos %s:%s\n%s", 
              connection['_id'], err.name, err.msg, err.message);
            callback(null,[]);
            connection.close();
          } else {
            cursor.toArray(function(err, results){
              if(err){
                logerror("[ERROR][%s][findMessages][toArray] %s:%s\n%s", 
                  connection['_id'], err.name, err.msg, err.message);
              } else {
                callback(null, []);
              }
              connection.close();
            });
          }
        });
    });
  }

  findDemoByName: function(name, callback) {
    onConnect(function(err, connection){
      r.db(dbConfig[db]).table('demos')
        .filter({'name': name})
        .limit(1)
        .run(connection, function(err, cursor){
          if(err) {
            logerror("[ERROR][%s][findDemoByName][collect] %s:%s\n%s", connection['_id'], err.name, err.msg, err.message);
            callback(err);
          }
          else {
            cursor.next(function (err, row) {
              if(err) {
                logerror("[ERROR][%s][findDemoByName][collect] %s:%s\n%s", connection['_id'], err.name, err.msg, err.message);
                callback(err);
              }
              else {
                callback(null, row);
              }
              connection.close();
            });
      }
        });
    })

  },

});


function onConnect(callback) {
  r.connect({host: dbConfig.host, port: dbConfig.port }, function(err, connection) {
    connection['_id'] = Math.floor(Math.random()*10001);
    callback(err, connection);
  });
}



};

module.exports = dbUtils;