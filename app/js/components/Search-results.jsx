var React = require('react');

var SearchResults = React.createClass({

	render: function() {

		return (
			<section id="search">
				<div className="search-box background-color-grey">
					<input className="search-box-input background-color-black text-color-white border-radius-5px" placeholder="What are you looking for?" />
				</div>	
				<div className="search-results-container background-color-red border-top-red">
					<div className="search-result-box background-color-white border-radius-5px">
						<img className="search-result-box-img" src="img/cover/1.png"/>
						<div className="search-result-box-overlay background-color-grey-light">
							<h3>Circle using animations</h3>
							<h4>Keyframes</h4>
						</div>
					</div>
				</div>	
			</section>
		);
	}

});

module.exports = SearchResults;