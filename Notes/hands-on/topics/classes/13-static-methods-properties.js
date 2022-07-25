/**
 * STATIC METHODS:
 * By definition, static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.
 * To call a static method from a class constructor or an instance method, you use the class name, followed by the . and the static method: 
 * className.staticMethodName(); OR this.constructor.staticMethodName();
 * In ES6, you define static methods using the static keyword. The following example defines a static method called createAnonymous() for the Person class:
 */

 class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

let anonymous = Person.createAnonymous("male");

// If you attempt to call the static method from an instance of the class, you’ll get an error. For example:
let person = new Person('James Doe');
let anonymous = person.createAnonymous("male"); // TypeError: person.createAnonymous is not a function

/**
 * STATIC PROPERTIES:
 * Like a static method, a static property is shared by all instances of a class. To define static property, you use the static keyword followed by the property name
 * 
 * To access a static property, you use the class name followed by the . operator and the static property name. 
 * 
 * To access a static property in a class constructor or instance methods, you use the following syntax:
 * 
 * className.staticPropertyName; OR this.constructor.staticPropertyName;
 */

 class Item {
	constructor(name, quantity) {
		this.name = name;
		this.quantity = quantity;
		this.constructor.count++;
	}
	static count = 0;
	static getCount() {
		return Item.count++;
	}
}

// Item class ...

/**
 * This example creates two instances of the Item class, which calls the class constructor. Since the class constructor increases the count property by one each time it’s called, the value of the count is two.
 */

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount()); // 2
