/**
 * In JavaScript, all functions are objects. They are the instances of the Function type. Because functions are objects, they have properties and methods like other objects.
 */

/**
 * Functions properties
Each function has two important properties: length and prototype.

The length property determines the number of named arguments specified in the function declaration.
The prototype property references the actual function object.
 */

function add(x, y) {
    return x + y;
}

console.log(add.length); // 2  ( The add() function accepts two arguments x and y. Therefore, the length property returns two. )
console.log(add.prototype); // Object{}