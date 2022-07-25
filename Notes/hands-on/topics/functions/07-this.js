/**
 * In general, the this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.
 * 
 * The value that this stores is the current execution context of the JavaScript program
 * this always holds the reference to a single object, that defines the current line of code’s execution context. 
 * 
 * In JavaScript, the this keyword refers to an object.

Which object ? It depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
 */

// Example1

let counter = {
    count: 0,
    next: function () {
      return ++this.count; // here this refers to counter object
    },
  };
  
  counter.next();

  // Global Context

  console.log(this === global); // true
  this.color= 'Red';
console.log(global.color); // 'Red'

// Function Context
/**
 * In JavaScript, you can call a function in the following ways:
    - Function invocation
    - Method invocation
    - Constructor invocation
    - Indirect invocation
 */

// Function Invocation

function show() {
    console.log(this === global); // true // in strict mode this will be undefined
 }
 
 show(); // this is same as window.show()

 // Method Invocation
// When you call a method of an object, JavaScript sets this to the object that owns the method.
 let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda ( here this refers to car object)

// Since a method is a property of an object which is a value, you can store it in a variable. And then call the method via the variable

let brand = car.getBrand;

console.log(brand()); // undefined
/**
 * You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.
 * 
 * To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value.
 */

 let brand2 = car.getBrand.bind(car); // this is set to car object
 console.log(brand2()); // Honda

 let bike = {
    brand: 'Harley Davidson'
}
 
let brand3 = car.getBrand.bind(bike); // here this is set to the bike object
console.log(brand3()); // Harley Davidson

// Constructor Invocation

function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

let car2 = new Car('Honda');
console.log(car2.getBrand()); 
// JavaScript creates a new object and sets this to the newly created object. This pattern works great with only one potential problem.

var bmw = Car('BMW');
console.log(bmw.brand); // => TypeError: Cannot read property 'brand' of undefined
// Since the this value in the Car() sets to the global object, the bmw.brand returns undefined.


// Indirect Invocation

/**
 * In JavaScript, functions are first-class citizens. In other words, functions are objects, which are instances of the Function type.

The Function type has two methods: call() and apply() . These methods allow you to set the this value when calling a function. For example:
 */

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a "); // It's a Honda
getBrand.call(audi, "It's an "); // It's an Audi

// The apply() method is similar to the call() method except that its second argument is an array of arguments.

getBrand.apply(honda, ["It's a "]); // "It's a Honda"
getBrand.apply(audi, ["It's an "]); // "It's a Audi"


