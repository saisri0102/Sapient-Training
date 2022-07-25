/**
 * First, in the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
Second, an arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.
An arrow function doesn’t have arguments object, new.target keyword, and prototype property.

An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope. An arrow function also doesn’t have the arguments object.

Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.
 */


function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(function () {
            console.log(this.speed); // undefined ( here this refers to window)
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50);

// Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context. The following code should work as expected:
function Car2() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}

let car2 = new Car2();
car2.speedUp(50); // 50;
