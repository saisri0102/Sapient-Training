/**
 * By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.
 * A “symbol” represents a unique identifier.
A value of this type can be created using Symbol():
Symbols dont auto convert to string
 */

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

let id = Symbol("id");
console.log(id); // TypeError: Cannot convert a Symbol value to a string
console.log(id.toString()); // Symbol(id), now it works