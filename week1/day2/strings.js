/**   
 * Remove Blanks
Create a function that, given a string, returns all of that string’s contents, but without blanks. 

If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

*/
const Ascii = {
  space: 32,
  zero: 47,
  nine: 57
}

function isSpace(char) {
  return asciiValueAt(char) === Ascii.space;
}

function not(value) {
  return !value;
}

function isNotSpace(value) {
  return not(isSpace(value));
}

function removeBlanks(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    const char = string.charAt(index);

    if (isNotSpace(char)) {
      result += char;
    }
  }

  return result;
}

function getDigits(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    const char = string.charAt(index);

    if (isNumeric(char)) {
      result += char;
    }
  }

  return parseInt(result, 10);
}

function buildString(string, callback) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    const char = string.charAt(index);
    const callbackResult = callback(char, index, string);

    if (callbackResult) {
      result += char;
    }
  }

  return result;
}

function getDigitsUsingBuild(string) {
  return parseInt(buildString(string, isNumeric), 10);
}

// console.log(getDigitsUsingBuild("0s1a3y5w7h9a2t4?6!8?0"));

function removeBlanksUsingBuild(string) {
  return buildString(string, isNotSpace);
}
console.log(removeBlanksUsingBuild(" Pl ayTha tF u nkyM usi c "));

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
/** 

Get Digits
Create a JavaScript function that given a string, returns the integer made from the 
string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", 
the function should return the number 1357924680. 1357924680



*/





function isNumeric(value) {
  return inRangeInclusive(asciiValueAt(value), Ascii.zero, Ascii.nine);
}

function isNullOrUndefined(value) {
  return value === undefined || value === null;
}

function asciiValueAt(value, position = 0) {
  return isNullOrUndefined(value) ? -1 : (value.toString().charCodeAt(position));
  // (expression) ? (if true) : (if false);
  // if (isNullOrUndefined(value)) {
  //   return -1;
  // } else {
  //   return value.toString().charCodeAt(position);
  // }
}

function inRangeInclusive(value, min, max) {
  return inRange(value, min, max + 1);
}

function inRange(value, min, max) {
  return min <= value && value < max;
}

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

/** 
Acronyms
Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

Given "Live from New York, it's Saturday Night!", return "LFNYISN".
 * 
*/
