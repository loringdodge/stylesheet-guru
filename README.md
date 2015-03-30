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
- **Click To Property** - changes the timeline back to the point of the property that was clicked
- **Tabs** - changes the views to allow the user to see either the CSS or HTML related to the animation (in progress)
- **Search Demos** - performs a keyword query to the database for available demos

What tech is used?
-------------
Front-End - [React/Flux](https://facebook.github.io/react/)
Back-End - Node/Express
Database - [RethinkDB](http://rethinkdb.com)

The front-end architecture is built off React/Flux and served from the server using the Server Side Rendering ([ssr-demo-kit](https://github.com/zertosh/ssr-demo-kit)) technique created by [zergtosh](https://github.com/zertosh).

Todo list
-------------
* 

Contributing
-------------
Loring Dodge - [GitHub](http://github.com/loringdodge/) | [Personal](http://www.loringdodge.com)
