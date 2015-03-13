var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemosByTitle: function(title, callback) {
		var title = title || '';
    $.get('/api/demos/' + title).then(function(data) {
      return callback(data);
    });
  }

}

module.exports = ServerUtils;