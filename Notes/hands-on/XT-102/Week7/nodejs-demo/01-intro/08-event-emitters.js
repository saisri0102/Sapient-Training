/**
 * If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
 */

// Initialise
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

/**
 * This object exposes, among many others, the on and emit methods.
    * emit is used to trigger an event
    * on is used to add a callback function that's going to be executed when the event is triggered
 */

// For example, let's create a start event, and as a matter of providing a sample, we react to that by just logging to the console:
// start, end are the arguments which we are passing
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
eventEmitter.emit('start', 1, 100);

/**
 * The EventEmitter object also exposes several other methods to interact with events, like

    once(): add a one-time listener
    removeListener() / off(): remove an event listener from an event
    removeAllListeners(): remove all listeners for an event
 */
  

  