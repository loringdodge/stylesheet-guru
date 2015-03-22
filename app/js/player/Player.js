var PlayerUtils = require('../utils/PlayerUtils');
var _ = require('underscore');

var Player = {

	play : function(demo){
		// play animation timeline
		console.log("Play");
	},

	pause : function(demo){
    // pause animation timeline
    console.log("Pause");
	},

	next : function(demo){
    // move one step forward in timeline
    if(demo.current < demo.timeline.length){
    	demo.current++;
    }
    console.log("Next", demo.current);
	},

	back : function(demo){
    // move one step backward in timeline w/out animation
    if(demo.current > 0){
    	demo.current--;
    }
 		console.log("Previous", demo.current);
	}

}

module.exports = Player;


