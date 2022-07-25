/**
 * Debouncing and throttling are used for optimising the performance of web app
 * It happens by limiting the rate of function execution
 *
 * Debouncing: Make next call If difference between two events happened is certain limit ( 300ms )
 * Throttling: Make next call if difference between two function call is 300ms 
 */

/**
 * Difference: 
 * use debouncing for your seearch
 * use throttling for window resize ( because window resizing user can do slowly or every quickly)
 * If we use debouncing for resizing let say we resized and paused and resized then it makes api call and pause then it makes api call
 * 
 * But if we use throttling then it will ignore for next 300ms even if user is dragging slowly or fastly
 * 
 * 
 * The major difference between debouncing and throttling is that debounce calls a function when a user hasn't carried out an event in a specific amount of time, while throttle calls a function at intervals of a specified amount of time while the user is carrying out an event.
 */
/**
 * What is better ?
 * It depends on usecase
 */