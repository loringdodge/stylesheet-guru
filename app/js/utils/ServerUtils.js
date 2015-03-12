var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemosByTitle: function() {
    $.get("/api/demo").then(function(data) {
      return data;
    });
  },

  demoExists: function(page, response) {
  	return (page === response) || Pages.NOT_FOUND;
  }

}

module.exports = ServerUtils;