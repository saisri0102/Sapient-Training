/**
 * Prior to ES2020, it was not possible to dynamically load the dialog.js module when needed. The following will cause an error:
 * 
 * ES2020 introduced the dynamic import of the module via the function-like import() with the following syntax:
 * import(moduleSpecifier);

 */
let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    import {show} from './01-in-of-loop'; // here we are importing d01-in-of-loop only when click happend
    show('Hi');
});


// the below dynamic import works
let btn2 = document.querySelector('#show');

btn2.addEventListener('click', function () {
    (async () => {
        try {
            let dialog = await import('./dialog.js'); // import() returns a Promise, you can use the async/await
            dialog.show('Hi')
        } catch (error) {
            console.log(error);
        }
    })();

});

// Dynamically loading multiple modules

Promise.all([ import(module1), import(module2), import(module3)]).then(([module1,module2,module3]) => {
        // use the modules
        // access the default export
        console.log(module3.default);
    });


