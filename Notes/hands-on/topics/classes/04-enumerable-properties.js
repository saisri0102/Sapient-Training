/**
 * In JavaScript, an object is an unordered list of key-value pairs. The key is usually a string or a symbol. The value can be a value of any primitive type (string, boolean, number, undefined, or null), an object, or a function.
 */

/**
 * An object property has several internal attributes including value, writable, enumerable and configurable. See the Object properties for more details.

The enumerable attribute determines whether or not a property is accessible when the object’s properties are enumerated using the for...in loop or Object.keys() method.

By default, all properties created via a simple assignment or via a property initializer are enumerable.
 */

 const person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.age = 25;


Object.defineProperty(person, 'ssn', {
    enumerable: false,
    value: '123-456-7890'
});

for (const key in person) {
    console.log(key); // firstName lastName age
}
/**
*  The firstName and lastName are enumerable properties because they are created via a property initializer.
* The age property is also enumerable because it is created via a simple assignment.
* To change the internal enumerable attribute of a property, you use the Object.defineProperty() method
* In this example, the ssn property is created with the enumerable flag sets to false, therefore it does not show up in the for...in loop.
 */
/**
 * ES6 provides a method propertyIsEnumerable() that determines whether or not a property is enumerable. It returns true if the property is enumerable; otherwise false
 */
 console.log(person.propertyIsEnumerable('firstName')); // => true
 console.log(person.propertyIsEnumerable('lastName')); // => true
 console.log(person.propertyIsEnumerable('age')); // => true
 console.log(person.propertyIsEnumerable('ssn')); // => false
