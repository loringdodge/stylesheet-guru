var _ = require('underscore');
var fs = require('fs');
var htmlescape = require('htmlescape');

var ServerConstants = require('../constants/ServerConstants');
var ApiRouter = require('../api/ApiRouter');

var Config = ServerConstants.Config;
var LayoutConfig = ServerConstants.LayoutConfig;

var layout = _.template(fs.readFileSync(Config.LAYOUT_FILE, 'utf8'));

var DemoRouter = {

	getDemoByUrl: function(req, res) {

	  var bootstrap = {
	    path: req.path
	  };

	  var layoutData = _.defaults({
	    applicationStart: 'Application.start(' + htmlescape(bootstrap) + ');',
	  }, LayoutConfig);

	  var status;

	  if (Config.SSR) {
	    var Application = require(Config.APPLICATION_FILE);
	    var rootComponentHTML = Application.start(bootstrap);
	    layoutData.rootComponentHTML = rootComponentHTML;
	    status = Application.RouteUtils.hasMatch(req.path) ? 200 : 404;
	  } else {
	    status = 200;
	  }

	  var markup = layout(layoutData);

	  res.status(status).send(markup);

	}

}

module.exports = DemoRouter;