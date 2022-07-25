// ES5
/**
 * Prior to ES6, JavaScript had no concepts of classes. To mimic a class, we often use the constructor/prototype pattern 
 */

// before ES6  ( constructor/prototype pattern  )
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());
/**
 * First, create the Person as a constructor function that has a property name called name. The getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.

Then, create a new instance of the Person type using the new operator. The john object, hence, is an instance of the Person and Object through prototypal inheritance.

The following statements use the instanceof operator to check if john is an instance of the Person and Object type:
 */

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true