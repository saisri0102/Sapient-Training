/**
 * Nullish Coalescing Operator ( ?? ): It is a new feature introduced in this ECMA proposal has now been adopted into the official JavaScript Specification. 
 * This operator returns the right hand value if the left hand value is null or undefined. If not null or undefined then it will return left hand value. 
 * Before, setting default values for undefined and null variables required the use of if statement or the Logical OR operator “||” as shown below:
 */

console.log(undefined || 42);
console.log(null || 42);
console.log(0 || 42);
console.log(false || 42);
console.log('' || 'hello'); //hello

console.log(undefined ?? 42);
console.log(null ?? 42);
console.log(0 ?? 42);
console.log(false ?? 42);
console.log('' ?? 'hello'); // ''

console.log(42 ?? 'hello');