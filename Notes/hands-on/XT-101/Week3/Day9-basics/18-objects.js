/**
 * An object is a collection of properties (key-value pairs)
 *  We can create object in JS without class
 * */
const emptyObject1 = new Object();  // constructor
const emptyObject2= { }; // Object literal syntax

// Keys are always strings in Js(except when it is symbol) so we can use single or double quote
// Value of key can be function also
// Values can be numbers, Objects, boolean, arrays, functions, strings, null, undefined etc

/**
 * Starting of Object {
 * }
 * Seperation of keyvalue pairs is ,
 * seperation of key and value by :
 * accessing use .
 */
const john={
    name: 'John',
    Age: '34', 
    emailIds:[
        'john@example.com',
        'jane@example.com'
    ],
    address:{
        city:'Bangalore',
        pincode: '560101'

    }
};

console.log(john.name);
console.log(john.age);
console.log(john.emailIds[1]);
console.log(john.address.city);

console.log(john['name']);
console.log(john['name', 'Age']);

const key='name';
console.log(john[key]);

const key2 = Math.random()>0.5?'name' : 'Age'; // Number is generated randomly during runtime
console.log(john[key2]);

console.log('name' in john); // true name key is present in john , so it is true
console.log('worksFor' in john); // false
console.log('city' in john) // false

/**
 * Properties of Object
 */

// 1. Object.assign()

const object1 = {  
    a: 1,  
    b: 2,  
    c: 3  
  };  
  const object3= {  
    g: 1,  
    h: 2,  
    i: 3  
  };    
    
  const object2 = Object.assign({c: 4, d: 5}, object1);  
  const object4 = Object.assign({g: 34, h: 25}, object3);  
  console.log(object2.c, object2.d);  
  console.log(object4.g, object4.h);  

  // 2. Object.defineProperty

  Object.defineProperty(object1, 'property1', { value: 22, } ); 
  
  // throws an error in strict mode  
console.log(object1.property1);  

// 3. Object.entries() - This method returns an array with arrays of the key, value pairs.

const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(obj)[2]);  

// 4. Object.keys() - This method returns an array of a given object's own property names.
// 5. Object.values() - 	This method returns an array of values.


// Ordered like an object
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49 ( not giving in inserted order)
}

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

/**
 * The “integer property” term here means a string that can be converted to-and-from an integer without a change.
 * So, “49” is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But “+49” and “1.2” are not:
**/
// Math.trunc is a built-in function that removes the decimal part
console.log( String(Math.trunc(Number("49"))) ); // "49", same, integer property
console.log( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
console.log( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

// non-integer properties are listed in the creation order
for (let prop in user) {
  console.log( prop ); // name, surname, age
}

let codes2 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes2) {
  console.log( +code ); // 49, 41, 44, 1 ( here 49, 41 are integers)
}