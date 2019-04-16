var myStr = "this is a string";

console.log(myStr); 

// offset     0       1
var array = ['cat', 'dog', 'horse'];

console.log(array.push('mouse'));

// console.log(array[0]);

for (let index = 0; index < array.length; index++) {
  console.log('index is ' + index, array[index]);
}

// console.log('index is ' + index);

// for (var index in array) {
//   console.log('index is ' + index, array[index]);
// }

for (const [index, element] of array.entries()) {
  console.log('element with const is ', index, element);
}

// var cat = array[0];
// var dog = array[1];

// var [cat, dog, , mouse] = array;

// console.log(cat, dog, mouse);

const person = {
  'hair-color': 'brown',
  eyes: 'blue',
  key: 'this is key'
};

person.age = 234;

console.log(person['hair-color']);

for (var key in person) {
  console.log('key is ', key, person[key]);
}

function sayHello(name, ...rest) {
  console.log(rest);
  // var name = 'Bob';
  console.log('hello ' + name);

  // function childScope() {
  //   var child = 'child';
  // }

  // console.log(childScope);
}

sayHello('Bob', true, false, 23423);