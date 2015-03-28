var React = require('react');
var _ = require('underscore');

var AppActions = require('../actions/AppActions');

var SearchBar = require('./Search-bar.jsx');
var SearchResultsBox = require('./Search-results-box.jsx');
var SearchResultsNone = require('./Search-results-none.jsx');

var SearchResults = React.createClass({

  render: function() {
    return (
      <section id="search">
        <SearchBar />
        <div className="search-results-container background-color-red border-top-red">
          <SearchResultsNone show={ this.props.search.length === 0} />
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