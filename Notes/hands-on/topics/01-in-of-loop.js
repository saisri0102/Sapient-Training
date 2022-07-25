/**
 * for (..in) loop: 
 * The JavaScript for (..in) statement loops through the   enumerable properties of an object. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its constructor’s prototype.
 */

 var person = {
    firstName: "GeeksforGeeks",
    lastName: "<br>A Computer Science Portal for Geeks ",
    rank: 43
};
for (key in person) {
    console.log('key', key);
    console.log('value', person[key]);
}

/**
 * for (..of) loop: 
 * This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.
 */
 var text = [
    "GeeksforGeeks",
    " A Computer Science Portal for Geeks ", 
    "43"
];
for (i of text) {
    console.log('i', i);
}