var React = require('react');

var AppActions = require('../actions/AppActions');

var SearchBar = React.createClass({

	handleChange: function(e) {
		e.preventDefault();
		AppActions.getDemosByTitle(e.target.value);
	},

	render: function() {
		return (
			<div className="search-box background-color-grey">
				<input className="search-box-input background-color-black text-color-white border-radius-5px" placeholder="What are you looking for?" onChange={this.handleChange} />
			</div>
		);
	}

});

module.exports = SearchBar;