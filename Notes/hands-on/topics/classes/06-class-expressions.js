/**
 * S6 provides you with an alternative way to defining a new class using a class expression.
 * Class expressions can be named or unnamed.
 * The class expression can be used to create a singleton object.
 * Similar to functions, classes have expression forms. A class expression provides you with an alternative way to define a new class.

A class expression doesn’t require an identifier after the class keyword. And you can use a class expression in a variable declaration and pass it into a function as an argument.
 */

let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let person = new Person('John Doe');
// Like a class declaration, the type of a class expression is also a function:
console.log(typeof Person); // function

/**
 * Similar to function expressions, class expressions are not hoisted. It means that you cannot create an instance of the class before defining the class expression.
 */
