/**
 * Every function in javascript has access to it's bind method
 * Similarly every function should have access to mybind function.
 * 
 * We can do this using prototype
 * 
 */

Function.prototype.mybind = function (...args){
    let context = this;
    return function (...params) {
        context.apply(args[0], [...args.slice(1), ...params ])
    }
}

let myName = {
    firstName: 'Bindu',
    lastName: 'Madhavi'
}

let myName2 = {
    firstName: 'Chandra',
    lastName: 'Gopi'
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state)
}

// let printMyName = printName.bind(myName, '');
// printMyName();



let printMyName2 = printName.mybind(myName, 'ongole');
printMyName2('AP'); // Bindu Madhavi from ongole, AP

let printMyName3 = printName.mybind(myName2, 'ongole', 'AP');
printMyName3(); // Chandra Gopi from ongole, AP