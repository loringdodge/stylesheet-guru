var path = require('path');

var configuration = {

	Config: {
		NODE_ENV: process.env.NODE_ENV,
		PORT: process.env.PORT || 8000,
		SSR: true,
		PUBLIC_DIR: path.resolve('public'),
		APPLICATION_FILE: path.resolve('public/main.js'),
		LAYOUT_FILE: path.resolve('server/views/layout.tmpl'),
	},

	LayoutConfig: {
		title: 'stylesheet.guru',
		favicon: 'about:blank',
		stylesheet: '/css/main.css',
		js: '/js/main.js',
		applicationStart: 'Application.start();',
		rootComponentHTML: '',
		ROOT_ELEMENT_ID: 'ReactRootElement'
	}


}

module.exports = configuration;