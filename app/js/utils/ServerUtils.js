var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var ServerUtils = {

	getDemoResponse: function(title) {
    $.get("/api/demo", title).done(function(data) {
      console.log(title);
    }.bind(this));
  },

  demoExists: function(page, response) {
  	return (page === response) || Pages.NOT_FOUND;
  }

}

module.exports = ServerUtils;