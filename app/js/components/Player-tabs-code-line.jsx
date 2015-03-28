var React = require('react');
var AppActions = require('../actions/AppActions');
var PlayerUtils = require('../utils/PlayerUtils');
var ClassUtils = require('../utils/ClassUtils');
var GetUtils = require('../utils/GetUtils');

var PlayerTabsCodeLine = React.createClass({

  get: GetUtils,

  componentDidUpdate: function() {

    if(this.props.type === 'property' && this.props.current === this.props.index){
      var childNode = React.findDOMNode(this);
      var offsetHeight = childNode.offsetHeight;
      var offsetTop = childNode.offsetTop;
      var parentNode = this.props.codePanel.parentNode;
      var parentHeight = this.props.codePanel.parentHeight;

      if((offsetHeight + offsetTop + 40) > parentHeight){
        $(parentNode).animate({ scrollTop: parentHeight}, 1000, 'easeInCirc');
      }
      if((offsetTop) <= 65){
        $(parentNode).animate({ scrollTop: offsetTop - 65}, 1000, 'easeOutCirc');
      }
    }
  },

  handleClick: function() {
    AppActions.setCurrent(this.props.index);
  },

  render: function() {
    switch(this.props.type) {
      case 'selector':
        return (
          <div className="code-block-row">
            <div className="code-block-row-number" unselectable="on">{this.props.lineNumber}</div>
            <div className="code-block-row-line">
              <span className="selector">{this.props.selector}</span>
              <span className="syntax">&#123;</span>
            </div>
          </div>
        );

      case 'property':
        var isHighlighted = this.props.current === this.props.index;
        var classes = ClassUtils({
          'code-block-row': true,
          'highlighted': isHighlighted,
          'clickable': !isHighlighted ? true : false
        });
        return (
          <div className={classes} onClick={this.handleClick}>
            <div className="code-block-row-number" unselectable="on">{this.props.lineNumber}</div>
            <div className="code-block-row-line">
              <span className="property">{this.props.property}</span>
              <span className="syntax">&#58;</span>
              <span className="value">{this.props.value}</span>
              <span className="syntax">&#59;</span>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="code-block-row">
            <div className="code-block-row-number" unselectable="on">{this.props.lineNumber}</div>
            <div className="code-block-row-line">
              <span className="syntax">&#125;</span>
            </div>
          </div>

      );
    }
  }
});

module.exports = PlayerTabsCodeLine;