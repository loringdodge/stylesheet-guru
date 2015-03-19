var React = require('react');

var SearchResultsNone = React.createClass({

	propTypes: {
    appState: React.PropTypes.object.isRequired
  },

	render: function() {
		if(this.props.show){
			return (
				<h2 className="text-size-30px">No matches</h2>
			);
		}
		return(null);

	}

});

module.exports = SearchResultsNone;