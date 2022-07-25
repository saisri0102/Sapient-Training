let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message); // Hello, Bob
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function
//The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one

let userName2 = 'John';

function showMessage2() {
  let userName2 = "Bob"; // declare a local variable

  let message2 = 'Hello, ' + userName2; // Bob
  console.log(message2); // Hello, Bob
}

// the function will create and use its own userName
showMessage2();

console.log( userName2 ); // John, unchanged, the function did not access the outer variable