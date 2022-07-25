/**
 * The call() method is a predefined JavaScript method. In which first argument always expects the reference ( to which this should point to)
 * The Function.prototype type has the call() method with the following syntax:
 * functionName.call(thisArg, arg1, arg2, ...);

 */

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

getBrand("It's a ") // OUTPUT: It's a undefined ( because in this case this refers to window object and window don't have brand)


getBrand.call(honda, "It's a "); // It's a Honda // call will assign this to honda object


/**
 * Apply: 
 * Apply is same call but arguments we need to send inside array
 */
getBrand.apply(audi, ["It's an "]); // It's an Audi

/**
 * bind
 * 
 * The bind() method returns a new function, when invoked, has its this sets to a specific value.
 * 
 * fn.bind(thisArg[, arg1[, arg2[, ...]]])
 * 
 * In this syntax, the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).
 * 
 * Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.
 * 
 * The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
 */

 let car = {
    brand: 'Honda',
    getBrand: function (prefix) {
        return `${prefix} ${this.brand}`;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

// Function Borrowing ( borrowing getBrand function from car object)
let brand3 = car.getBrand.bind(bike, 'It is a'); // here this is set to the bike object
console.log(brand3()); // It is a Harley Davidson

let brand4 = car.getBrand.bind(bike);
console.log(brand4("It is a new ")) // It is a new  Harley Davidson

