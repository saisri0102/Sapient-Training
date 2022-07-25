/**
 * First class citizen
 * JavaScript classes are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.
 */
 function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'