var React = require('react');
var AppActions = require('../actions/AppActions');
var PlayerUtils = require('../utils/PlayerUtils');
var ClassUtils = require('../utils/ClassUtils');
var GetUtils = require('../utils/GetUtils');

var PlayerTabsCodeLine = React.createClass({

  get: GetUtils,

  componentDidUpdate: function() {

    if(this.get('type') === 'property' && this.get('current') === this.get('index')){
      var childNode = React.findDOMNode(this);
      var offsetHeight = childNode.offsetHeight;
      var offsetTop = childNode.offsetTop;
      var parentNode = this.get('codePanel').parentNode;
      var parentHeight = this.get('codePanel').parentHeight;

      if((offsetHeight + offsetTop + 40) > parentHeight){
        $(parentNode).animate({ scrollTop: parentHeight }, 1000, 'easeInCirc');
      }
      if((offsetTop) <= 65){
        $(parentNode).animate({ scrollTop: offsetTop - 65 }, 1000, 'easeOutCirc');
      }
    }
  },

  handleClick: function() {
    AppActions.updateCurrent(this.get('index'));
  },

  render: function() {
    switch(this.get('type')) {
      case 'selector':
        return (
          <div className="code-block-row">
            <div className="code-block-row-number" unselectable="on">{this.get('lineNumber')}</div>
            <div className="code-block-row-line">
              <span className="selector">{this.get('selector')}</span>
              <span className="syntax">&#123;</span>
            </div>
          </div>
        );

      case 'property':
        var isHighlighted = this.get('current') === this.get('index');
        var classes = ClassUtils({
          'code-block-row': true,
          'highlighted': isHighlighted,
          'clickable': !isHighlighted ? true : false
        });
        return (
          <div className={classes} onClick={this.handleClick}>
            <div className="code-block-row-number" unselectable="on">{this.get('lineNumber')}</div>
            <div className="code-block-row-line">
              <span className="property">{this.get('property')}</span>
              <span className="syntax">&#58;</span>
              <span className="value">{this.get('value')}</span>
              <span className="syntax">&#59;</span>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className="code-block-row">
            <div className="code-block-row-number" unselectable="on">{this.get('lineNumber')}</div>
            <div className="code-block-row-line">
              <span className="syntax">&#125;</span>
            </div>
          </div>

      );
    }
  }
});

module.exports = PlayerTabsCodeLine;