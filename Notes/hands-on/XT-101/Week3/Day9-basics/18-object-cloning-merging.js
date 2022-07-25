// Cloning

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  console.log( user.name ); // still John in the original object

// Assigning
  
let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user2, permissions1, permissions2);

console.log(user2) // now user2 = { name: "John", canView: true, canEdit: true }

// We also can use Object.assign to replace for..in loop for simple cloning:
let clone2 = Object.assign({}, user2);