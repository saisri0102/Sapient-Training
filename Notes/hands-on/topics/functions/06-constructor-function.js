// ES5
/**
 * In practice, you often need to create many similar objects

To do that, you can use a constructor function to define a custom type and the new operator to create multiple objects from this type.

Technically speaking, a constructor function is a regular function with the following convention:

The name of a constructor function starts with a capital letter like Person, Document, etc.
A constructor function should be called only with the new operator.

Note that ES6 introduces the class keyword that allows you to define a custom type. And classes are just syntactic sugar over the constructor functions with some enhancements.
 */

function Person(firstName, lastName) {

    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    // return this;
}

let person = new Person('John','Doe');
/**
 * The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.
 * 
 * To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.
 */

// calling the constructor function without the new keyword
let person3 = Person('John','Doe');
console.log(person3.firstName); // TypeError: Cannot read property 'firstName' of undefined
/**
 * Technically, you can call a constructor function like a regular function without using the new keyword
 * In this case, the Person just executes like a regular function. Therefore, the this inside the Person function doesn’t bind to the person variable but the global object.
 */

/**
 * To prevent a constructor function to be invoked without the new keyword, ES6 introduced the new.target property.

If a constructor function is called with the new keyword, the new.target returns a reference of the function. Otherwise, it returns undefined
 */

// By using the new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this:

function Person2(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person2 = Person2("John", "Doe");

console.log(person2.firstName);
