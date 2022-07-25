/**
 * In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

 * Reference: https://www.javascripttutorial.net/javascript-pass-by-value/
 * In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

    Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function. In other words, the changes made to the arguments are not reflected outside of the function.

    If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript
 */

// pass by value of primitive values
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100 
console.log(y); // 10 -- no change

// pass by value of reference values

let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person); 
  
  console.log(person); // { name: 'John', age: 26 } 

  /**
   * Explanation
   * Here person object is stored in heap memory. And the person variable stored in stack which has reference to object stored in heap. 
   * Now for increaseAge we are sending person i.e., we are sending the reference values ( object stored in heap)
   * so indirectly we are changing the reference object
   * In fact, when passing an object to a function, we are passing the reference of that object, not the actual object. Therefore, the function can modify the properties of the object via its reference.
   * 
   * However, you cannot change the reference passed into the function. See below Example
   */

   let person2 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge2(obj) {
    obj.age += 1;
  
    // reference another object
    obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge2(person2);
  
  console.log(person2); // { name: 'John', age: 26 }

  /**
   * In this example, the increaseAage2() function changes the age property via the obj argument and makes the obj reference another object:
   * However, the person2 reference still refers to the original object whose the age property changes to 26. In other words, the increaseAge2() function doesn’t change the person reference
   */
  
