// base case
// progress
// recursion


/**
 * recursive print array
*/
const values = [5, 99, 6, 2, 9, 20, 33, 2, 6, 345, 7, 2, 7568, 100];


function printArray(array, index = 0) {
  // base case
  if (index >= array.length) {
    return;
  }

// progress

  console.log(array[index++]);

  // recursion
  printArray(array, index);
}


// printArray(values);

function printArray2(array) {
  if (array.length === 0) {
    return;
  }

  console.log(array.pop());

  printArray2(array);
}

// printArray2([...values]);


/**
 * 
 * Recursive Sigma
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
 * 
 */

function rSigma(n) { // 5
  if (n < 1) {
    return 0;
  }

  // for (let i = 1; i <= n; i++) {
  //   sum += i
  // }
  // n = n - 1;
  
  // return n - 1;
  return rSigma(n - 1) + Math.floor(n);
}
 
// console.log(rSigma(2.5));

// function rSigma(n) { // 4
//   if (n < 1) {
//     return 0;
//   }

//   // for (let i = 1; i <= n; i++) {
//   //   sum += i
//   // }
//   // n = n - 1;
  

// }
 
// function rSigma(n) { // 3
//   if (n < 1) {
//     return 0;
//   }

//   // for (let i = 1; i <= n; i++) {
//   //   sum += i
//   // }
//   // n = n - 1;
  

//  }



 /**  
  * Recursive Fibonacci
Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, 
treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

rFib(2) = 1 (0+1); 

rFib(3) = 2 (1+1); 

rFib(4) = 3 (1+2); 

rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.
 */

let count = 0;
function rFib(n, cache = {}) {
  count++;
  if (n <= 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = rFib(n - 1, cache) + rFib(n - 2, cache);

  return cache[n];
}

console.log(rFib(40));


console.log(`called rfib ${count} times`);





class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  length() {
    // return (this.next ? this.next.length() : 0) + 1;

    if (this.next === null) {
      return 1;
    }

    return this.next.length() + 1;
  }
}
 
class List {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  addFront(node) {
    if (!(node instanceof Node)) {
      node = new Node(node);
    }

    node.next = this.head;
    this.head = node;

    return this;
  }
 /** 
  * Recursive List Length
Given the first node of a singly linked list, create a recursive function that 
returns the number of nodes in that list. Assume list contains no loops and is short enough 
that you will not ‘blow your stack’.
 */
  length() {
    // return this.isEmpty() ? 0 : this.head.length();

    if (this.isEmpty()) {
      return 0;
    }

    return this.head.length();
  }
}


const list = new List();

values.forEach(value => list.addFront(value));
console.log(list.length());
console.log(list.length() === values.length);


 /** 
  * Flood Fill
Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image 
with a certain color. We change the image as if we painted a canvas: a two-dimensional array of 
integers, where each integer represents a color for that pixel. The canvas Array.length is the Y 
dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal 
to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate 
(2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! 
Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly 
adjacent via X or Y to another pixel you will change. 
  * 
 */



 /**  
  * 
  * Binary String Expansion
You are given a string containing chars ‘0’, ‘1’, and ‘?’. 
For every ‘?’, either ‘0’ or ‘1’ can be substituted. 
Write a recursive function to return an array of all valid strings 
with ‘?’ chars expanded to ‘0’ or ‘1’. 
binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string 
functions such as slice(), use them sparingly, as they are expensive.
 */
