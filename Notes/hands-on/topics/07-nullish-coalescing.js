/**
 * JavaScript nullish coalescing operator (??) that accepts two values and returns the second value if the first one is null or undefined.
 */

const name = null ?? 'John';
console.log(name); // 'John'
const age = undefined ?? 28;
console.log(age); // 28

/**
 * Why nullish coalescing operator ?

 * When assigning a default value to a variable, you often use the logical OR operator (||). For example:
 */

let count = 0;
let result = count || 1;
console.log('result', result) // it will give 1 ( but ideally it should be 0)

let count2 = 0;
let result2 = count2 ?? 1;

console.log(result2)