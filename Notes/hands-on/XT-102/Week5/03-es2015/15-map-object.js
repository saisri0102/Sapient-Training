/**
 * Before ES6, we often used an object to emulate a map by mapping a key to a value of any type. But using an object as a map has some side effects:
 * An object always has a default key like the prototype.
 * A key of an object must be a string or a symbol, you cannot use an object as a key.
 * An object does not have a property that represents the size of the map.
 */

/**
 * Map
 * 
 * By definition, a Map object holds key-value pairs where values of any type can be used as either keys or values. In addition, a Map object remembers the original insertion order of the keys.
 * let map = new Map([iterable]);
 */

 let john = { name: 'John Doe' },
 lily = { name: 'Lily Bush' },
 peter = { name: 'Peter Drucker' };

let userRoles = new Map();
console.log(typeof(userRoles)); // object
console.log(userRoles instanceof Map); // true
// Add elements to map
userRoles.set(john, 'admin');
userRoles.set(lily, 'editor').set(peter, 'subscriber'); // set is chainable

// As mentioned earlier, you can pass an iterable object to the Map() constructor:
let userRoles2 = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

// Get an element from Map
userRoles.get(john); // admin

// If you pass a key that does not exist, the get() method will return undefined.
let foo = {name: 'Foo'};
userRoles.get(foo); //undefined


// Check the existance of the key
userRoles.has(foo); // false
userRoles.has(lily); // true

// get the number of elements in a map
console.log(userRoles.size); // 3

console.log(userRoles);
/**
 * Map(3) {
  { name: 'John Doe' } => 'admin',
  { name: 'Lily Bush' } => 'editor',
  { name: 'Peter Drucker' } => 'subscriber'
}
 */

// Iterate over map Keys

for (const user of userRoles2.keys()) {
    console.log(user.name);
  }

// Iterate over map values

for (let role of userRoles.values()) {
    console.log(role);
  }

// Iterate over map elements

// the entries() method returns an iterator object that contains an array of [key,value] of each element in the Map object:
for (const [key, value] of userRoles.entries()) {
    console.log(`${key.name}: ${value}`);
  }
// John Doe: admin
// Lily Bush: editor
// Peter Drucker: subscriber
userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));
// John Doe: admin
// Lily Bush: editor
// Peter Drucker: subscriber

// Convert map keys or values to array

var keys = [...userRoles.keys()];
console.log(keys);
/**
 * [
  { name: 'John Doe' },
  { name: 'Lily Bush' },
  { name: 'Peter Drucker' }
]
 */

let roles = [...userRoles.values()];
console.log(roles); // [ 'admin', 'editor', 'subscriber' ]

// Delete an element by key
userRoles.delete(john);

// Delete all elements in the map
userRoles.clear();
console.log(userRoles.size); // 0

/** WeakMap
 * A WeakMap is similar to a Map except the keys of a WeakMap must be objects. It means that when a reference to a key (an object) is out of scope, the corresponding value is automatically released from the memory.

A WeakMap only has subset methods of a Map object:

 get(key)
 set(key, value)
 has(key)
 delete(key)
Here are the main difference between a Map and a WeekMap:

Elements of a WeakMap cannot be iterated.
Cannot clear all elements at once.
Cannot check the size of a WeakMap.
 */

/**
 * Useful JavaScript Map methods
    - clear() – removes all elements from the map object.
    - delete(key) – removes an element specified by the key. It returns if the element is in the map, or false if it does not.
    - entries() – returns a new Iterator object that contains an array of [key, value] for each element in the map object. The order of objects in the map is the same as the insertion order.
    - forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the this value for each callback.
    - get(key) – returns the value associated with the key. If the key does not exist, it returns undefined.
    - has(key) – returns true if a value associated with the key exists, otherwise, return false.
    - keys() – returns a new Iterator that contains the keys for elements in insertion order.
    - set(key, value) – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.
    - values() returns a new iterator object that contains values for each element in insertion order.
 */