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
      var childHeight = childNode.offsetHeight;
      var childTop = childNode.offsetTop;

      var codePanel = this.get('codePanel');
      var parentNode = codePanel.parentNode;
      var parentHeight = codePanel.parentHeight;

      var scrollSpeed = codePanel.scrollSpeed;
      var scrollPaddingTop = codePanel.scrollPaddingTop;
      var scrollPaddingBottom = codePanel.scrollPaddingBottom;

      if((childHeight + childTop + scrollPaddingTop) > parentHeight){
        $(parentNode).animate({ scrollTop: parentHeight }, scrollSpeed, 'easeInCirc');
      }
      if(childTop <= scrollPaddingBottom){
        $(parentNode).animate({ scrollTop: childTop - scrollPaddingBottom }, scrollSpeed, 'easeOutCirc');
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