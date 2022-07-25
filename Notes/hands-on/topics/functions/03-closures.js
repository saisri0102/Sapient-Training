/**
 * Closures:
 * 
 * In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
 * 
 * A closure is a function that preserves the outer scope in its inner scope.
 * 
 * A closure is a function having access to the parent scope, even after the parent function has closed
 */


/**
 * Lexical scoping
   * 
   * A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. 
   * 
   * But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
*/

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}
    
greeting(); // here scope of message is till completion of running the greeting function

/** Closures */
function greeting2() {
    let message = 'Hi';
    function sayHi() {
        console.log(message);
    }
    return sayHi;
}
greeting2()(); // still can access the message variable

/**
 * The interesting point here is that, normally, a local variable only exists during the execution of the function.
 * 
 * It means that when the greeting() function has completed executing, the message variable is no longer accessible.
 * 
 * In this case, we execute the hi() function that references the sayHi() function, the message variable still exists. 
 * 
 * So here we can say the sayHi function forms a closure with it's outer function ( greeting2)
 */
