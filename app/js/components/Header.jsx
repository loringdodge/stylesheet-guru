var React = require('react');

var Header = React.createClass({

  render: function(){
    return (
      <header className="background-color-grey border-bottom-black">
        <h1 className="header-logo text-bold-100 text-center text-color-white">stylesheet.<span className="text-bold-700 text-color-yellow">guru</span></h1>
      </header>
    );
  }

});

module.exports = Header;