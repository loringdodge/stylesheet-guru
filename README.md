stylesheet.guru
==================================
A CSS visualizer that allows users to see how CSS properties are applied to DOM elements using animations. In this way, users may gain a different perspective and understanding of CSS properties and their values. 

How it works?
-------------
When a user clicks on the 'play' button, an animation timeline is triggered that applied CSS properties to the specified DOM element in sequential order.

![On Demo Load](/screenshots/screenshot1.png?raw=true)

The user has control over the animation queue and has the options to 'pause', take the 'next' step, or go 'back' a step in the timeline. Additionally, the user may click on an individual property to bring the animation back to a specific state.

![In Progress](/screenshots/screenshot2.png?raw=true)

What can the user do?
-------------
- **Play** - starts the animation timeline
- **Pause** - pauses the animation timeline
- **Next** - moves one step forward in the timeline
- **Back** - moves one step backward in the timeline
- **Click To Property** - changes the timeline back to the point of the property that was clicked (in progress)
- **Tabs** - changes the views to allow the user to see either the CSS or HTML related to the animation (in progress)
- **Search Demos** - searches the database of available demos based on a keyword

What tech is used?
-------------
- Front-End - [React/Flux](https://facebook.github.io/react/)
- Animation Library - jquery
- Back-End - Node/Express
- Database - [RethinkDB](http://rethinkdb.com)

Pages are served using Node/Express and content is pulled from a RethinkDB database based on a received pathname. The initial state of the application is registered to the Store and dissiminated to the Components. The animation player is a queue that fires the next upon successful completion via a callback and an Action is fired to update the current index. The Action is registered with the Dispatcher which then sends it's payload to the Store to update the current index with the Store.

The front-end architecture is built off React/Flux and served from the server using the Server Side Rendering ([ssr-demo-kit](https://github.com/zertosh/ssr-demo-kit)) technique created by [zergtosh](https://github.com/zertosh).

What needs to be done?
-------------
- Determine the most optimal way generate the animation queue. It currently makes use of jQuery.queue() which is optimized for animations and provides a stop() method to stop an animation in progress. Additionally, the queue ensures that the next animation in the queue will only be fired after successful completion of the previous using a callback function.

- Determine the most efficient way to apply pseudo elements. These are not part of the DOM tree and cannot be selected using any library. Pseudo elements must also be applied on page load or else they are not registered.
  - (Option 1) Reorganize HTML structure on DOM load to insert child div for any :after or :before selectors.
  - (Option 2: Better) Prio to serving page, break each CSS property into a different class in a seperate stylesheet, server the stylesheet, and apply each class to the DOM element when the timeline is triggered.


What features are in the future?
-------------
- **Fullscreen Mode** - Allow the user enlarge the player to fullscreen.
- **Tooltip** - Give the users to hover over a property or value and see what it does in a tooltip.
- **Warning Box** - Let users know why a property wasn't animated. Some properties can and some can't. 

Contributing
-------------
Loring Dodge - [GitHub](http://github.com/loringdodge/) | [Personal](http://www.loringdodge.com)

Deployment
-------------
Coming soon!
