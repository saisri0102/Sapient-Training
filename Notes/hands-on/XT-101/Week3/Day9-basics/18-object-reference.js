'use-strict'
let message = "Hello!";
let phrase = message; // This is copy by value
console.log(message === phrase) // true

let user = { name: "John" };
/**
 * A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
 * When an object variable is copied, the reference is copied, but the object itself is not duplicated.
 */


let admin = user; // copy the reference
admin.name = 'Pete';
console.log(user.name) // 'Pete', changes are seen from the "user" reference
console.log(admin === user) // true
