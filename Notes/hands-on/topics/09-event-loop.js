/**
 * 
 * JavaScript is a single-threaded synchronous programming language. This means that JavaScript can do only one thing at a single point in time.

The JavaScript engine executes a script from the top of the file and works its way down. It creates the execution contexts, pushes, and pops functions onto and off the call stack in the execution phase.

If a function takes a long time to execute, you cannot interact with the web browser during the function’s execution because the page hangs.These functions are called blocking functions

Callbacks to the rescue: 
To prevent a blocking function from blocking other activities, you typically put it in a callback function for execution later. For example:
 */

console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');

/**
 * Working
 * In our example, when calling the setTimeout() function, the JavaScript engine places it on the call stack, and the Web API creates a timer that expires in 1 second.
 * 
 * Then JavaScript engine place the task() function is into a queue called a callback queue or a task queue:
 * 
 * The event loop is a constantly running process that monitors both the callback queue and the call stack.

If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack.
 */

/**
 * Event loop
 * In javascript everything runs in call stack only.
 * Event loop is like a gate keeper which continuously monitors the call stack, callback queue and job queue and pushes the callback functions from callback , job queue to the call stack when call stack is empty. 
 */