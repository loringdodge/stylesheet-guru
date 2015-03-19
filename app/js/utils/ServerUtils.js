

var ServerUtils = {

	getDemosByTitle: function(title, callback) {
		var title = title || '';
    $.get('/api/demos/' + title).then(function(data) {
      return callback(data);
    });
  },

  getDemoByPath: function(path, callback) {
    $.get('/api/demo/' + path).then(function(data) {
      return callback(data);
    });
  }

}

module.exports = ServerUtils;