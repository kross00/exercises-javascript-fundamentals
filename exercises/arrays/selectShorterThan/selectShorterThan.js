/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  let count = [];
  for(let i of array){
      if (i.length<threshold){
          count.push(i);
      }
  }
return count; 
}

if (require.main === module) {
    console.log('Running sanity checks for selectShorterThan:');
console.log(selectShorterThan(['sup','greetings','hey','be','pee'],4));
  }
  
  module.exports = selectShorterThan;
