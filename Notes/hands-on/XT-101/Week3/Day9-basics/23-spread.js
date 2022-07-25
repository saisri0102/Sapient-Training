const obj1 = {
    name: 'bindu',
    age: 23
};

const obj2 = {
    class: 12,
    ...obj1
}
console.log(obj2) // { class: 12, name: 'bindu', age: 23 }