let x; //?
console.log(x);  // Output : undefined

// undefined will occur in many places where you evalute some expression and it will seemingly result in failures
// Semi colon at end is optional is JS
let y= undefined; // JS is case sensitive Lang 
console.log(y); 

/**
 * typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
 */