console.log('Message no. 1: Sync');setTimeout(function() {
    console.log('Message no. 2: setTimeout');
 }, 0);var promise = new Promise(function(resolve, reject) {
    resolve();
    console.log('hello');
 });promise.then(function(resolve) {
    console.log('Message no. 3: 1st Promise');
 })
 .then(function(resolve) {
    console.log('Message no. 4: 2nd Promise');
 });console.log('Message no. 5: Sync');

 /**
  * All Synchronous code goes inside main stack
  * All callback code like settimeout goes inside callback queue
  * Promises will stay inside job queue
  * 
  * First Main stack gets executed . after completing the main stack it checks job queue after job queue completes it goes to callback queue
  */