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
// E - does capitalization matter

function reverse(str) {
  // reverse string
  // return reversed string
  return str.split("").reverse().join("");
}

module.exports = reverse;
