/**
 * The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
 */
 let user = {}; // a user without "address" property

 // console.log(user.address.street); // Error!

 // solution
console.log(user.address ? user.address.street ? user.address.street.name : null : null);
// using optional chaining
console.log( user?.address?.street ); // undefined (no error)