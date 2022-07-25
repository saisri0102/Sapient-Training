class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith

// ES6 Syntax for getter and setter

class Person2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
// To call the getter, you use the following syntax:
let person2 = new Person2('Jane Doe');
let name = person2.name;
/**
 * When JavaScript sees the access to name property of the Person2 class, it checks if the Person2 class has any name property.

If not, JavaScript checks if the Person2 class has any method that binds to the name property. In this example, the name() method binds to the name property via the get keyword. Once JavaScript finds the getter method, it executes the getter method and returns a value.
 */
/**
 * If a class has only a getter but not a setter and you attempt to use the setter, the change won’t take any effect. See the following example:
 * Assuming person don't have setter
 * let person = new Person("Jane Doe");
console.log(person.name);

// attempt to change the name, but cannot
person.name = 'Jane Smith';
console.log(person.name); // Jane Doe
 */

// using getter in object literal

let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);
