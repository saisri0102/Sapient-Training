/**
 * 
 * Hoisting: 
 * 
 * During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.
 * 
 * All let, const, var variables and functions are hoisted to the top
 * 
 * But let and const variables will be present in the temporal dead zone. So we can't access those variables before initialization. 
 * 
 * 
 * Temporal Dead Zone: It's the between the variable hoisted and the variable is initialized with some value
 */

// Variable Hoisting

// 1. with var key keyword
console.log(counter); // undefined ( only declarations are moved to top)
var counter = 1;

// 2. with let or const keyword
//console.log(counter2); // Reference Error: Cannot access 'counter2' before initialization
let counter2 = 1;


// Function Hoisting 

// 1. Function Declaration syntax

print() // hello world
function print(){
  console.log('hello world');
}

// 2. Function Expression syntax with var
console.log(print2)  // undefined
print2() // TypeError: print2 is not a function
var print2 = function (){
  console.log('Hello Google')
}

// 3. Function Expression syntax with let
console.log(print3)  // ReferenceError: Cannot access 'print2' before initialization
print3() // ReferenceError: Cannot access 'print2' before initialization
let print3 = function (){
  console.log('Hello Google')
}


/**
 * How Hoisting works ? 
 * Its because of execution context. In execution context memory is already creaded for the variables and initialized to undefined before executing the code itself. 
 * That's why we can access the variable before declaration. 
 * 
 * Hoisting happens for let, const , function expression, arrow syntax also . but it's just that we cannot access them before initialization. Untill initialization the variables or functions created with let and const will be present in temporal dead zone
 */



