/**
 * ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the # sign.
 * To access private fields we can use getters and setters
 */
 class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }
  let circle = new Circle(10);
  console.log(circle.area); // 314.1592653589793

  /**
   * By default, members of a class are public. ES2020 introduced the private members that include private fields and methods.

    To make a public method private, you prefix its name with a hash #. JavaScript allows you to define private methods for instance methods, static methods, and getter/setters.

    To call the #privateMethod inside the MyClass, you use the this keyword as follows:
    this.#privateMethod();

    To call the #privateStaticMethod() inside the MyClass, you use the class name instead of the this keyword:
  MyClass.#privateStaticMethod();

*/

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = Person.#validate(firstName);
      this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length === 3) {
          return str;
        }
      }
      throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName());