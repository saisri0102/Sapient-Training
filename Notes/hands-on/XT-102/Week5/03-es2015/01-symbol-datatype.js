/**
 * ES6 added Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.'
 * To create a new symbol, you use the global Symbol() function as shown in this example:
 * The Symbol() function creates a new unique value each time you call it:
 * 
 * The Symbol() function accepts a description as an optional argument. The description argument will make your symbol more descriptive.
 * You can access the symbol’s description property using the toString() method. The console.log() method calls the toString() method of the symbol implicitly as shown in the following example:
 */
 let s = Symbol('foo');
 console.log(Symbol() === Symbol()); // false
let firstName = Symbol('first name'), lastName = Symbol('last name');
console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)
console.log(typeof firstName); // symbol

// let s2 = new Symbol(); // error

// Symbol Usages

/**
 * 1. Using symbols as unique values
 * Whenever you use a string or a number in your code, you should use symbols instead. For example, you have to manage the status in the task management application. Before ES6, you would use strings such as open, in progress, completed, canceled, and on hold to represent different statuses of a task. In ES6, you can use symbols as follows:
 */

 let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// complete a task
task.setStatus(statuses.COMPLETED);

/**
 * 2. Using symbol as the computed property name of an object
 */

 let status = Symbol('status');
 let task = {
     [status]: statuses.OPEN,
     description: 'Learn ES6 Symbol'
 };
 console.log(task);
 console.log(Object.keys(task)); // ["description"]

 // To get all properties of an object whether the properties are enumerable or not, you use the Object.getOwnPropertyNames() method.
 console.log(Object.getOwnPropertyNames(task)); // ["description"]
 // To get all property symbols of an object, you use the Object.getOwnPropertySymbols() method, which has been added in ES6.

 console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]
 // The Object.getOwnPropertySymbols() method returns an array of own property symbols from an object.