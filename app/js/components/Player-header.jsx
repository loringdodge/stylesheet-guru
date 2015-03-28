var React = require('react');

var PlayerMenu = require('./Player-menu.jsx');

var PlayerHeader = React.createClass({

  render: function() {
    return (
		  <div className="player-header background-color-grey-back">
			 <PlayerMenu demo={this.props.demo} />
			 <h2 className="player-header-title text-bold-700">{this.props.demo.title}</h2>
			 <p className="player-header-desc text-size-14px">{this.props.demo.desc}</p>
		  </div>
    );
  }

});

module.exports = PlayerHeader;