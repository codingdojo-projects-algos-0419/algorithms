/** 
 * Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/

function pushFront(array, value) {
  return insertAt(array, 0, value);
}

var arr = [1, 2, 3, 4, 45, 6, 7, 8, 89, 10];
pushFront(arr, 0);

// console.log(arr);


/**

Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

*/

function popFront(array) {
  // const first = array[0];

  // for (let index = 0; index < array.length - 1; index++) {
  //   array[index] = array[index + 1];
  // }

  // array.pop();

  // return first;
  return removeAt(array, 0);
}

console.log(popFront(arr));

/**

Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

*/

function insertAt(array, position, value) {
  for (let index = array.length; index >= position; index--) {
    array[index] = array[index - 1];
  }

  array[position] = value;

  return array;
}

console.log(insertAt(arr, 4, 99999));

/**

Remove At
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
 */

function removeAt(array, position) {
  const value = array[position];
// [4,2,1,3,5]
// [4,2,3,3,5]
// [4,2,3,5,5]
  
  for (let index = position; index < array.length; index++) {
    array[index] = array[index + 1];
  }

  array.length--;
  return value;
}

// console.log(removeAt([4, 2, 1, 3, 5], 2));

 /** 
  * Given an array of comparable values, move the lowest element to array’s front, 
  * shifting backward any elements previously ahead of it. Do not otherwise 
  * change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] 
  * and return it. As always, do this without using built-in functions.
  */

function min2Front(array) {
  let minPosition = 0;

  // find min value position
  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[minPosition]) {
      minPosition = index;
    }
  }

  // console.log(`min position ${minPosition}`);
  // console.log('min position ' + minPosition);
  
  // using minPosition removeAt
  return pushFront(array, removeAt(array, minPosition));
}

console.log(min2Front([4, 2, 1, 3, 5]));

/**
 *Implement rotateArr(arr, shiftBy) that accepts array and offset. 
 Shift arr’s values to the right by that amount. 
 ‘Wrap-around’ any values that shift off array’s end to the 
 other side, so that no data is lost. Operate in-place: given 
 ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

Second: allow negative shiftBy (shift L, not R).

Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

Fourth: minimize the touches of each element.
 *
 * @param {*} array
 */
function rotate(array, shiftBy) {
  // ensure shiftBy is positive
  // console.log(shiftBy * -1 + array.length);

  while (shiftBy < 0) {
    // goal is to have shiftby positive
    shiftBy += array.length;
  }
  
  shiftBy = shiftBy % array.length;
  
  console.log(`shiftby ${shiftBy}, array length ${array.length}`);

  for (let index = 0; index < shiftBy; index++) {
    const last = array.pop();
    pushFront(array, last);
  }

  return array;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(rotate(values, 2));

/**
 * 
Remove Duplicates
Sara is looking to hire an awesome web developer and has received applications 
from various sources. Her assistant alphabetized them but noticed some duplicates. 
Given a sorted array, remove duplicate values. Because array elements are already
in order, all duplicate values will be grouped together. As with all these array 
challenges, do this without using any built-in array methods.

Second: Solve this without using any nested loops.
 */

function removeDuplicates(arr) {
  let i = 0
  let n = 1
  let temp = null
  let duplicates = 0
  while (arr[i] !=  arr[arr.length-1]) {
      //checks whether we know the next unique piece of data, and whether we should reset it
      if (temp && temp == arr[i+n]) {
          temp = null
          i++
          n = 1
          continue
      }
      //otherwise, assuming we still know the data, and iterates through n
      else if (temp) {
          
          arr[i+n] = temp
          n += 1
          continue
      }
      //iterates through n
      else if (arr[i] == arr[i+n]) {
          
          n += 1
          continue
      }
      //sets next unique piece of data
      else if (n != 1) {
          temp = arr[i+n]
          n = 1
          continue
      }
      else {
          i++
      }
  }
  arr.length = i + 1
  return arr
}

// console.log(removeDuplicates(quizlet))

function swap(array, index, position) {
  console.log(array);
  console.log(`swapping ${index} with ${array[index]} and ${position} with ${array[position]}`);
  const temp = array[index];
  array[index] = array[position];
  array[position] = temp;

  return array;
}

function removeDupes(array) {
  let dupes = 0;
  // ['cat', 'dog', 'bat', 'horse', 'dog', 'bat']

  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      dupes++;
    } else {
      swap(array, index - dupes, index);
    }
  }

  array.length -= dupes;

  console.log(array);
}

const animals = ['cat', 'dog', 'dog', 'bat', 'bat', 'bat', 'horse', 'mouse'];

removeDupes(animals);
