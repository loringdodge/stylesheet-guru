var path = require('path');

module.exports = {

  Config: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 8000,
    SSR: true,
    PUBLIC_DIR: path.resolve('public'),
    APPLICATION_FILE: path.resolve('public/main.js'),
    LAYOUT_FILE: path.resolve('server/views/layout.tmpl'),
    DATABASE: 'rethinkDB'
  },

  LayoutConfig: {
    title: 'stylesheet.guru',
    favicon: 'about:blank',
    stylesheet: '/main.css',
    script: '/main.js',
    jquery: '/bower_components/jquery/dist/jquery.min.js',
    jqueryui: '/bower_components/jquery-ui/jquery-ui.min.js',
    applicationStart: 'Application.start();',
    rootComponentHTML: '',
    // Keep in sync with `app/constants/AppConstants.js`
    ROOT_ELEMENT_ID: 'ReactRootElement'
  },

  Database: {
    host: 'localhost',
    port: 28015,
    db  : 'guru'
  }

};
