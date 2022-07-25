// Arthimetic Operators : +,-,*, % , /,  **

let x=13, y=24;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y) //0.5416666666666666
console.log(x%y) // modulo division for remainder
console.log(3**4) // x^y

// Relational operators (<,<=, >, >=, !=, ==, !==)
console.log(1<2);
console.log(1==2);
console.log(2==1+1);
console.log(2=='2'); // true // compares only value
console.log(2==='2') //false compared date value and type
console.log(2!==3); //true
console.log(2!=3);  // true
// !== <==> !(x==y)

// Logical Operators - !, &&, ||
const isRaining = true, doILikeToGetWet = false;
const shouldITakeUmbrella = isRaining && doILikeToGetWet;

console.log(shouldITakeUmbrella);
console.log(isRaining || doILikeToGetWet);
console.log(!isRaining);

console.clear();
console.log(3 && 4); // 4
console.log(null && 4); // null
console.log(3 || 4); // 3  //	Logical OR
console.log(null || 4); // 4
console.log(3 & 4);// 0 (Bitwise AND)
console.log(3 | 4); //7 ( OR OPERATOR)
console.log(3 ^ 4); // 7 (XOR)
console.log(10<<2)  // 40
console.log(10>>2) // 2 ( bitwise right shift operator)

// Assignment + Arthimetic
x=x+1;
x+=1; // same as above
x-=1;
x*=1;
x/=1;
x**=2;
console.log(x);

// increment and decrement (post-pre-increment)

x= 34;
console.log(++x); //  increments and print 35
console.log(x++); // prints 35 and increments to 36

console.log(x--); // prints 36 and decrements to 35
console.log(--x); // decrement to 34 and print 34

// Ternery operator

let string = x>30? 'More than 30': 'Less than or equal to 30';
console.log(string);


// Presedence of operators
const result= 1+2*3/4 //  1+ (6/4) = 2.5 // *, /, +

console.log(result);
console.log(true || false && !true || true); //  !, && , ||

// Nullish coalescing operator '??' ( This is a recent addition to the language. Old browsers may need polyfills.)
/**
 * The result of a ?? b is:

if a is defined ( that is not null or undefined), then a,
if a isn’t defined, then b.
 */
let b = 'hello world'
let a
let ot2  = (a !== null && a !== undefined) ? a : b;
let ot3 = a ?? b  // shortcut of above
console.log(ot2); // hello world
console.log(ot3) // hello world

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first truthy value:
console.log(firstName1 || lastName1 || nickName1 || "Anonymous"); // Supercoder
/**
 * || returns the first truthy value.
    ?? returns the first defined value.
    In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.
 */

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0