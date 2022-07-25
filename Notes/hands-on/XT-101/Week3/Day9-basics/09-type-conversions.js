// String Conversion
let value = true;
value = String(value);

// Number Conversion
let str = "123";
let num = Number(str);

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

// Boolean Conversion

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean("0") ); // true