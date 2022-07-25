/**
 * JavaScript functions are first-class citizens. in other words functions are objects. This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.
 * Whatever is possible with objects is possible with functions as well 

 */

// Example 1 ( assigning )
function add(a, b) {
    return a + b;
}

let sum = add; // In the assignment statement, we don’t include the opening and closing parentheses at the end of the add identifier. We also don’t execute the function but reference the function.

// the below 2 statements are same
let result1 = add(10, 20);
let result2 = sum(10, 20);


// Example 2 (  Passing a function to other function )
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result3 = average(10, 20, sum);

console.log(result3); // 15

// Example 3 ( Returning function from function)
function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
}

let products = [
    {name: 'iPhone', price: 900},
    {name: 'Samsung Galaxy', price: 850},
    {name: 'Sony Xperia', price: 700}
];

// sort products by name
console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

// sort products by prices

console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);

// Example 4 ( passing function as parameter )
function cmToIn(length) {
    return length / 2.54;
  }
  
  function intoCm(length) {
    return length * 2.54;
  }
  
  function convert(fn, length) {
    return fn(length);
  }
  
  let inches = convert(cmToIn, 10);
  console.log(inches);
  
  let cm = convert(intoCm, 10);
  console.log(cm);
