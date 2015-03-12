var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemosByTitle: function() {
    $.get('/api/demo').then(function(data) {
      return data;
    }).bind(this);
  }

}

module.exports = ServerUtils;