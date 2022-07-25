// If a function is part of object then this refer to object
//else if refer to window object 
// If function is called globally then context is window
//if it is called through  object then context is that object

// every function has a context when it is called
// every time a function is called its context can change
function foo() {
    // "this" is some extra info
    console.log( this ); // function context : what is the "this" in the function?
}

// Any general function when called, using a global reference to it (etc.)
// "this" -> window (in the browser), global (in Node.js)
foo();

const obj = {
    name: 'I am foo',
    foo: foo,
    bar: function() {
        console.log( this );
    }
};

// "this" -> calling object, obj
obj.foo();

console.log( foo === obj.foo ); // true

// "this" -> obj
obj.bar();

const bar = obj.bar;

// "this" -> window (in the browser), global (in Node.js)
bar();

function f( cb ) {
    cb(); // window (careful: the function cb cannot access obj)
}

f( obj.bar ); // cb = obj.bar;

/**
 * 
bind is a method on the prototype of all functions in JavaScript. It allows you to create a new function from an existing function, change the new function's this context, and provide any arguments you want the new function to be called with


call and apply are very similar—they invoke a function with a specified this context, and optional arguments. The only difference between call and apply is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.
 */