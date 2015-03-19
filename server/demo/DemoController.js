////////// Modules //////////
var _ = require('underscore');
var fs = require('fs');
var htmlescape = require('htmlescape');

var ServerConstants = require('../constants/ServerConstants');
var ApiRouter = require('../api/ApiRouter');
var RethinkUtils = require('../db/RethinkUtils');

var Config = ServerConstants.Config;
var LayoutConfig = ServerConstants.LayoutConfig;

var layout = _.template(fs.readFileSync(Config.LAYOUT_FILE, 'utf8'));

////////// Demo Router //////////
var DemoRouter = {

	// Verifies url & sends layout.tmpl
	initializeDemo: function(req, res) {
		var url = req.params.url;

		RethinkUtils.findDemoByPath(url)
			.then(function(demo) {
				
				RethinkUtils.findDemosByTitle()
					.then(function(search){

						var bootstrap = {
				    	path: '/demo',
				    	demo: demo,
				    	search: search
					  };

					  var layoutData = _.defaults({
					    applicationStart: 'Application.start(' + htmlescape(bootstrap) + ');',
					  }, LayoutConfig);

					  var status;

					  if (Config.SSR) {
					    var Application = require(Config.APPLICATION_FILE);
					    var rootComponentHTML = Application.start(bootstrap);
					    layoutData.rootComponentHTML = rootComponentHTML;

					    status = Application.RouteUtils.hasDatabaseMatch(url, demo.url) ? 200 : 404;
					  } else {
					    status = 200;
					  }

					  var markup = layout(layoutData);

					  res.status(status).send(markup);

					})
					.catch(function (err) {
						res.status(400).end();
					});
			})

	}

}

module.exports = DemoRouter;