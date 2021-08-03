// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// I - string
// O - string
// C - none
// E - does capitalization matter?

// Using reduce method
function reverse(str) {
return str.split('').reduce(((reversed, character) => {
  return character + reversed;
}), '');
}

reverse('addie')

module.exports = reverse;

// Solution Using native reverse method

// function reverse(str) {
//   // reverse string
//   // return reversed string
//   return str.split("").reverse().join("");
// }

//   // reverse string without native reverse()
// function reverse(str) {
//   let newStr = '';

//   // FOR LOOP
//   // for (let i = str.length - 1; i >= 0; i--) {
//   //   newStr += str[i];
//   // }

//   for (let char of str) {
//     newStr = char + newStr;
//   }
//   // return reversed string
//   return newStr;
// }