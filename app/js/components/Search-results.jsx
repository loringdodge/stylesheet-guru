var React = require('react');

var SearchResults = React.createClass({

	render: function() {
		return (
			<section id="search" className="background-color-grey">
				<div id="search-box">
					<label className="search-box-label">Search</label>
					<input className="search-box-input background-color-black" placeholder="What are you looking for?"/>
				</div>	
				<div id="search-results-container" className="background-color-red">

				</div>	
			</section>
		);
	};

});