var React = require('react');

var AppActions = require('../actions/AppActions');
var Navigate = require('./Navigate');

var AppConstants = require('../constants/AppConstants');

var Pages = AppConstants.Pages;

var SearchResultsBox = React.createClass({

  navigate: function(){
    AppActions.switchPage(true);
  },

	render: function() {

		return (
					<Navigate page={Pages.HOME} className="search-result-box background-color-white border-radius-5px border-bottom-red">
						<img className="search-result-box-img" src="/img/cover/1.png"/>
						<div className="search-result-box-overlay background-color-grey-light">
							<h3 className="">Circle using animations</h3>
							<h4 className="text-color-grey-mid">Keyframes</h4>
						</div>
					</Navigate>
		);
	}

});

module.exports = SearchResultsBox;