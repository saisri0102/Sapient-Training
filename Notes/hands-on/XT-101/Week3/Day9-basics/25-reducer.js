/**
 * Reduce Function
 * Runs a function on each array element and return a single value
 * Reduce function takes two parameters
 *  1. Callback Function which need to run on each array elements
 *      this callback function takes two arguments 
          *  1. accumulator
          *  2. current ( current iterating element)
 *  2. Initial Accumulator value
 * 
 * Reduce function always returns a single value
 */


// Example 1: 

 let bio = [
  {
    firstName: 'bindu', lastName: 'Madhavi', age: 23
  },
  {
    firstName: 'Gopi', lastName: 'Chnadra', age: 24
  },
  {
    firstName: 'Vidya', lastName: 'Maddireddy', age: 23
  },
  {
    firstName: 'Uday', lastName: 'Kiran', age: 22
  }
]
// Print age and number of people with that age: 
// output : { 23: 2, 24: 1, 22: 1}

const ageoutput = bio.reduce((acc, curr) => {
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }
  else{
    acc[curr.age] = 1
  }

  return acc;
}, {}) // here initial accumulator is empty object

console.log(ageoutput); // 20


// Example2 : Finding sum of array elements

let arr = [2,3,4,5,6]
const sum = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0)

console.log('sum', sum);

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" },
];
const pokemon2 = {
  charmander: "fire",
  squirtle: "water",
  bulbasaur: "grass",
};
const getMapFromArray = (data) => {
  let arr = [];
  for (const property in data) {
    arr.push({ key: `${property}`, value: `${data[property]}` });
  }
  return arr;
};

const output = getMapFromArray(pokemon2);
console.log(output);
/**
 * [
  { key: 'charmander', value: 'fire' },
  { key: 'squirtle', value: 'water' },
  { key: 'bulbasaur', value: 'grass' }
]
 */


// converting array to object
const getMapFromArray2 = (data) =>
  data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = item.type;
    return acc;
  }, {});

// Converting Key-value pair to object
const output2 = getMapFromArray2(pokemon);
console.log(output2); // { charmander: 'fire', squirtle: 'water', bulbasaur: 'grass' }

// const result = Object.keys(output).map((key) => {
//     const obj = {}
//     obj[key] = output[key]
//     return obj;
//   });

//   console.log('result', result)

