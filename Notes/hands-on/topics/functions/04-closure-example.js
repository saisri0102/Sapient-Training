

/**
 * Real World Scenario: 
 * 
 * UseCase1: Incrementing the counter
 */

// Without Closure and local variable
function counter () {
    let count = 0;

    function increment () {
        count++;
        console.log('count', count)
    }

    increment();
}

counter(); // 1
counter(); // 1 ( here count variable is not preserved because the variable scope is inside function only ( Lexical scope ))

// with global variable
let counterValue = 0
function counter2 () {
    function increment () {
        counterValue++;
        console.log('counterValue', counterValue)
    }

    increment();
}

counter2(); // 1
counter2(); // 2  ( it works but here count is global variable so anyone can access and modify the value)

// With Closure
function counter3 () {
    let count = 0;

    function increment () {
        count++;
        console.log('count', count)
    }

    return increment; // here increment is a closure
}

const inc = counter3();
inc(); // 1
inc(); // 2

// Closure makes it possible for a function to have "private" variables.
// In this case count is private variable and can be modified only using inc()


/**
 * UseCase2: Currying using closures
 */

function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); // Hi John
 console.log(sayHi('Bindu')); // Hi Bindu
 console.log(sayHello('John')); // Hello John