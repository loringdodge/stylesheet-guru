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
          <Navigate page={Pages.DEMO} path={'/demo/' + this.props.searchDemo.url} className="search-result-box background-color-white border-radius-5px border-bottom-red">
            <img className="search-result-box-img" src={this.props.searchDemo.image}/>
            <div className="search-result-box-overlay background-color-grey-light">
              <h3 className="">{this.props.searchDemo.title}</h3>
              <h4 className="text-color-grey-mid">{this.props.searchDemo.keywords}</h4>
            </div>
          </Navigate>
    );
  }

});

module.exports = SearchResultsBox;