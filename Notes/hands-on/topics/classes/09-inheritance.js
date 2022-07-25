/**
    * Use the extends keyword to implement the inheritance in ES6. The class to be extended is called a base class or parent class. The class that extends the base class or parent class is called the derived class or child class.
    * Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
    * Use super keyword to call methods of the parent class in the methods of the child class.
 */
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal { // By doing this, the Bird class inherits all methods and properties of the Animal class.

    // Bird‘s constructor, call super() to invoke the Animal‘s constructor with the legs argument.
    // If the Bird class doesn’t have a constructor, you can don’t need to do anything else
    // so in the below it works even if we remove constructor as bird class don't have any constructor
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

// if the child class has a constructor, it needs to call super(). For example, the following code results in an error:
// Because the super() initializes the this object, you need to call the super() before accessing the this object. Trying to access this before calling super() also results in an error.

class Bird2 extends Animal {
    constructor(legs) {
    }
    fly() {
        console.log('flying');
    }
}
let bird2 = new Bird2(2); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// For example, if you want to initialize the color property of the Bird class, you can do it as follows:

class Bird3 extends Animal {
	constructor(legs, color) {
		super(legs);
		this.color = color;
	}
	fly() {
		console.log("flying");
	}
	getColor() {
		return this.color;
	}
}

let pegion = new Bird3(2, "white");
console.log(pegion.getColor());