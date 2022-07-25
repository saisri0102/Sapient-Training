/**
 * Introduction to the Storage type
The Storage type is designed to store name-value pairs. The Storage type is an Object with the following additional methods:

The Storage object can store only strings. It’ll automatically convert non-string data into a string before storing it.

When you retrieve data from a Storage object, you’ll always get the string data

*/

/** 
 * Inbuilt Methods
* setItem(name, value) – set the value for a name
* removeItem(name) – remove the name-value pair identified by name.
* getItem(name) – get the value for a given name.
* key(index) – get the name of the value in the given numeric position.
* clear() – remove all values.
To get the number of name-value pairs in a Storage object, you can use the length property.
 */

/**
 * Javascript LocalStorage
 * The localStorage is an instance of the Storage type that allows you to store persistent data in the web browsers.
 * HTML5 specification introduces the localStorage as a way to store data with no expiration date in the web browsers.
 * In other words, the data stored in the browsers will persist even after you close the browser windows.
 * In Chrome, localStorage is cleared when these conditions are met: (a) clear browsing data, (b) "cookies and other site data" is selected, (c) timeframe is "from beginning of time".
 * The data stored in the localStorage is bound to an origin. It means that the localStorage is unique per protocol://host:port.
 */

/**
 * Difference between localstorage and cookie
 * 
 * First, the data stored in the localStorage isn’t sent to the server in every request like cookies. For this reason, you can store more data in the localStorage.
 * 
 * Most modern web browsers allow you to store up to 5MB of data in the localStorage. Note that you can store up to 4KB in cookies.
 * 
 * Second, the data stored in the localStorage can be managed by the client, specifically JavaScript in the web browser. It cannot be accessible by the servers.
 * 
 * However, cookies can be managed by both JavaScript in web browsers and servers.
 */

/**
 * Accessing local storage
 * You can access the localStorage via the property of the window object:
 * 
 * window.localStorage // output Storage {length: 0}
 * 
 * 1. setItem - setItem() method to store a name-value pair in the localStorage
 * 
 * window.localStorage.setItem('theme','dark'); 
 * 
 * 2. Length property - To get the number of name-value pairs, you use the length property like this:
 * 
 * console.log(window.localStorage.length); // 1
 * console.log(localStorage.length); // 1 ( since window object is global we don't need to specify it)
 * 
 * 3. getItem - To get the value by a key, you use the getItem() method.
 * 
 * localStorage.getItem('theme'); // 'dark'
 * 
 * 4. removeItem - To remove a name-value pair by a key, you use the removeItem() method.
 * 
 * localStorage.removeItem('theme');
 */
// Loop over key value pairs
localStorage.setItem('theme','light');
localStorage.setItem('backgroundColor','white');
localStorage.setItem('color','#111');

let keys = Object.keys(localStorage);
for(let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

// Storing Objects

const settings = {
    backgroundColor: '#fff',
    color: '#111',
    theme: 'light'
};

localStorage.setItem('settings', JSON.stringify(settings));

console.log(localStorage.getItem('settings')); // '{"backgroundColor":"#fff","color":"#111","theme":"light"}'
let storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings);

/**
 * Storage Event
 * 
 * When you make a change to the Storage object, the storage event is fired on the document.
 * 
 * The storage event occurs in the following scenarios:
 * Store a name-value pair by calling the setItem() method.
 * Remove a name-value pair by calling the removeItem() method.
 * And remove all values by calling the clear() method.

The storage event has the following properties:

    * domain – the domain which the storage changes for.
    * key – the key that was set or removed.
    * newValue – the value that the key was set to or null if the key was removed.
    * oldValue – the value before the key was set or removed
 */