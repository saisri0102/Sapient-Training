/**
 * 
 * Currying: 
 * currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
 * 
 * Currying can be done in 2 two ways 
    1. use bind method ( as bind method won't invoke the function directly instead it returns copy of the function )
    2. using closures
 */

/**
 * USECASE :
 * 
 * Write a function multiply() that multiples 2 numbers:
 * If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.

But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function. The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.
 */


//1. Using Closures
function multiply(number1, number2) {
    if (number2 !== undefined) {
      return number1 * number2;
    }
    return function (number2) {
      console.log(number1 * number2);
    };
}

let multipleByTwo = multiply(2);
multipleByTwo(5) // 10

let multipleByThree = multiply(3);
multipleByThree(5) // 15

multiply(3, 4); // 12


//2. Using bind()

function add(x, y){
    console.log(x + y)
}

let addByTwo = add.bind(this, 2) // bind returns copy of the original function
addByTwo(3); // 5

let addByThree = add.bind(this, 3, 4)
addByThree(5); // 7

let addByFour = add.bind(this)
addByFour(4, 5); // 9


function subtract(x){
    return function(y){
        console.log(y-x)
    }
}

let subtractByTwo = subtract(2)
subtractByTwo(3); // 1

let subtractByThree = subtract(3, 4)
subtractByThree(5); // 2

let subtractByFour = subtract()
subtractByFour(4, 5); // NaN





