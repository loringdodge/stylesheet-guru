var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemosByTitle: function(callback) {
    $.get('/api/demo').then(function(data) {
      return callback(data);
    });
  }

}

module.exports = ServerUtils;