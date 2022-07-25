// ES6
/** */
class Person {
    // If we want to create multiple objects having similar properties and methods, constructor functions are used.
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
/**
 * In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.

 */
 let john = new Person("John Doe");
 let name = john.getName();
console.log(name); // "John Doe"
/**
 * To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.
 */

 console.log(typeof Person); // function
 console.log(john instanceof Person); // true
console.log(john instanceof Object); // true