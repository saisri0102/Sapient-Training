/**
 * ES6 provides a new type named Set that stores a collection of unique values of any type. To create a new empty Set, you use the following syntax:
 *   let setObject = new Set();
 * The Set constructor also accepts an optional iterable object. If you pass an iterable object to the Set constructor, all the elements of the iterable object will be added to the new set:
 * let setObject = new Set(iterableObject);
 */

// create a new set from an array
let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars); // Set { 'a', 'b', 'c' }
console.log(typeof(chars)); // object
let result = chars instanceof Set;
console.log(result); // true

// print the size of set
let size = chars.size;
console.log(size);//  3

// add elements to set
chars.add('d'); //add() method is chainable
console.log(chars); // Set { 'a', 'b', 'c', 'd' }
chars.add('e')
     .add('f');

// to check set has specific elements
let exist = chars.has('a');
console.log(exist);// true
console.log(chars.has('z')); // false

// REMOVE elements from set
chars.delete('f');
console.log(chars); // Set {"a", "b", "c", "d", "e"}

// The delete() method returns true indicating that the element has been removed successfully. To delete all elements of a set, you use the clear() method:

chars.clear();
console.log(chars); // Set{}

/**
 * Looping the elements of a JavaScript Set
A Set object maintains the insertion order of its elements, therefore, when you iterate over its elements, the order of the elements is the same as the inserted order. Suppose you have a set of user roles as follows
 */
let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

for (let role of roles) {
    console.log(role);
}

// The Set also provides the keys(), values(), and entries() methods like the Map. However, keys and values in the Set are identical. For example:
for (let [key, value] of roles.entries()) {
    console.log(key === value);
}

roles.forEach(role => console.log(role.toUpperCase()));

/**
 * WeakSets
A WeakSet is similar to a Set except that it contains only objects. Since objects in a WeakSet may be automatically garbage-collected, a WeakSet does not have size property. Like a WeakMap, you cannot iterate elements of a WeakSet, therefore, you will find that WeakSet is rarely used in practice. In fact, you only use a WeakSet to check if a specified value is in the set. Here is an example:
 */

let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server');
}
/**
 * Useful Set methods
The Set object provides the following useful methods:

- add(value) – appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
- clear()  – removes all elements from the Set object.
- delete(value) – deletes an element specified by the value.
- entries()– returns a new Iterator that contains an array of  [value, value] .
- forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.
- has(value) – returns true if an element with a given value is in the set, or false if it is not.
- keys() – is the same as values() function.
- [@@iterator] – returns a new Iterator object that contains values of all elements stored in the insertion order.
 */