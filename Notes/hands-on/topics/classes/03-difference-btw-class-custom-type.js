/**
 * Despite the similarities between a class and a custom type defined via a     constructor function, there are some important differences.
 *  1. class declarations are not hoisted like function declarations.
    For example, if you place the following code above the Person class declaration section, you will get a ReferenceError.
    2. All the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
    3. calling the class constructor without the new operator will result in an error
    4. class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable.
 */