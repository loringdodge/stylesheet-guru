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
					<Navigate page={Pages.HOME} ident={this.props.demo.id} className="search-result-box background-color-white border-radius-5px border-bottom-red">
						<img className="search-result-box-img" src="/img/cover/1.png"/>
						<div className="search-result-box-overlay background-color-grey-light">
							<h3 className="">{this.props.demo.title}</h3>
							<h4 className="text-color-grey-mid">{this.props.demo.keywords}</h4>
						</div>
					</Navigate>
		);
	}

});

module.exports = SearchResultsBox;