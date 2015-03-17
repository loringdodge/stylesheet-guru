var React = require('react');
var _ = require('underscore');

var AppActions = require('../actions/AppActions');

var SearchBar = require('./Search-bar.jsx');
var SearchResultsBox = require('./Search-results-box.jsx');

var SearchResults = React.createClass({

	propTypes: {
    appState: React.PropTypes.object.isRequired
  },

	render: function() {
		console.log(this.props);
		return (
			<section id="search">
				<SearchBar />
				<div className="search-results-container background-color-red border-top-red">
					{ _.map(this.props.search, function(searchDemo){
						return (
							<SearchResultsBox searchDemo={searchDemo} />
						);
					}, this) }
				</div>	
			</section>
		);

	}

});

module.exports = SearchResults;