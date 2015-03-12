var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemosByTitle: function() {
    $.get('/api/demo').then(function(data) {
      return data;
    });
  }

}

module.exports = ServerUtils;