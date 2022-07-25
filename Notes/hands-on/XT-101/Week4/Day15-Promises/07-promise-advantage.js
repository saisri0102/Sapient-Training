

// Promise - A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
/** A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, we can defer the execution of a code block until an async request is completed.
 * 
 * 
The function you pass into the Promise constructor runs synchronously, but anything that depends on its resolution will be called asynchronously. Even if the promise resolves immediately, any handlers will execute asynchronously (similar to when you setTimeout(fn, 0)) - the main thread runs to the end first.
 **/
// A JavaScript Promise object contains both the producing code ( resolve , reject) and calls to the consuming code ( then , catch):
// promise gets returned immediately 
// then, catch also called immediately
// but function inside 'then' will be called only after promise got resolved
// function inside catch get excuted when promise is rejected
// Promise is a trusted 3rd party for caller of an async function, and the async function communicate
// Promise is generated synschronously
// initially promise object will be in unfulfilled state. From there it goes to either
    // - resolved (succes)
    // - rejected (failure)
// promise objects have 2 important methods
    // - then()
    // - catch()
    function sum( x, y ) {
        const promise = new Promise(function( resolve, reject ) {
            if( typeof x !== 'number' || typeof y !== 'number' ) {
                // tell the generated promise object about the error
                reject( new Error( 'Both arguments must be numbers' ) );
                return;
            }
    
            setTimeout(function() {
                const result = x + y;
                // tell the generated promise object about the result
                resolve( result );
            }, 3000);
        });
    
        return promise;
    }
    
    const promise1 = sum( 12, 'hello' );
    
    // to then(), we pass the function to be called when promise is resolved
    promise1.then(function( result1 ) {
        console.log( 'result1 = ', result1 );
    });
    
    // to catch(), we pass the function to be called when promise is rejected
    promise1.catch(function( err ) {
        console.log( 'err = ', err );
    });