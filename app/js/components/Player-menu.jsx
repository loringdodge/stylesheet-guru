var React = require('react');
var AppActions = require('../actions/AppActions');
var PlayerUtils = require('../utils/PlayerUtils');
var GetUtils = require('../utils/GetUtils');

var PlayerMenu = React.createClass({

  get: GetUtils,

  play: function() {
    var demo = this.get('demo');
    var Q = this.get('q') || PlayerUtils.makeQueue();
    var timeline = this.get('timeline');

    AppActions.updateQ(Q, false);

    var that = this;

    var recurseQueue = function() {
      var current = that.get('current');
      var timelineObj = timeline[current];
      var pause = that.get('pause');

      Q.queue(function(){
        if(current === timeline.length || pause === true) {
          return;
        }

        var temp = {};
        temp[timelineObj['property']] = timelineObj['value'];
        $(timelineObj['selector']).animate(temp, {
          duration: 1000,
          complete: function(){
            Q.queue(recurseQueue());
            Q.dequeue();
            AppActions.updateCurrent(PlayerUtils.increaseCurrent(current, timeline.length));
          },
          fail: function(){
            AppActions.updateCurrent(PlayerUtils.decreaseCurrent(current));
          }
        });
      });
    }

    recurseQueue();

  },

  pause: function() {
    var Q = this.get('q');
    if(Q !== null) Q.stop();
    AppActions.updateQ(Q, true);
  },

  next: function() {
    this.pause();
    var current = this.get('current');
    var timeline = this.get('timeline');
    if(current < timeline.length) AppActions.updateCurrent(PlayerUtils.increaseCurrent(current, timeline.length));
  },

  back: function() {
    this.pause();
    var current = this.get('current');
    if(current > 0) AppActions.updateCurrent(PlayerUtils.decreaseCurrent(current));
  },

  render: function() {
    return (
      <div className="player-menu">
        <div className="btn background-color-green" onClick={this.play}>PLAY</div>
        <div className="btn background-color-red" onClick={this.pause}>PAUSE</div>
        <div className="btn background-color-blue" onClick={this.next}>NEXT</div>
        <div className="btn background-color-orange" onClick={this.back}>BACK</div>
      </div>
    );
  }

});

module.exports = PlayerMenu;