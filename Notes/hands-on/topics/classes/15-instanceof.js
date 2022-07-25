/**
 * The instanceof operator returns true if a prototype of a constructor (constructor.prototype) appears in the prototype chain of an object.
 The following shows the syntax of the instanceof operator:

 object instanceof contructor
 */

 function Person(name) {
    this.name = name;
  }
  
  let p1 = new Person('John');
  
  console.log(p1 instanceof Person); // true

  class Person2 {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Employee extends Person2 {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
  }
  
  let e1 = new Employee();
  
  console.log(e1 instanceof Employee); // true
  console.log(e1 instanceof Person2); // true
  console.log(e1 instanceof Object); // true