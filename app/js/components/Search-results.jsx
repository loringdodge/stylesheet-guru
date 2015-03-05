var React = require('react');

var SearchResultsBox = require('./Search-results-box.jsx');

var SearchResults = React.createClass({

	render: function() {

		return (
			<section id="search">
				<div className="search-box background-color-grey">
					<input className="search-box-input background-color-black text-color-white border-radius-5px" placeholder="What are you looking for?" />
				</div>	
				<div className="search-results-container background-color-red border-top-red">
					<SearchResultsBox />
				</div>	
			</section>
		);
	}

});

module.exports = SearchResults;