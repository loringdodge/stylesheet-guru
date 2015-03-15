

var ServerUtils = {

	getDemosByTitle: function(title, callback) {
		var title = title || '';
    $.get('/api/demos/' + title).then(function(data) {
      return callback(data);
    });
  },

  getDemoById: function(id, callback) {
    $.get('/api/demo/' + id).then(function(data) {
      return callback(data);
    });
  }

}

module.exports = ServerUtils;