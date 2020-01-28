/**
 * Given an array of numbers, returns true if _any_ element is positive
 * and false otherwise.
 *
 * @example
 * anyPositive([1, 2, 3, 4, 5]); // => true
 * anyPositive([1, 2, -3, 4, 5]); // => true
 * anyPositive([0, 0, 1]); // => true
 * anyPositive([-10, -10, -10]); // => false
 * anyPositive([-10, -10, 1]); // => true
 *
 * @param {number[]} array - An array of numbers
 * @returns {boolean} True if every number in the input array is positive
 *   and false otherwise.
 */
function anyPositive(array) {
    let count = 0 
    for(let i of array ){
        if(i>0){
            //count++;
            return true;
        }
    }
    return false; 
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for anyPositive:');
  

console.log(anyPositive([1,2,3,4,5]));
console.log(anyPositive([1,2,-3,4,5]));
console.log(('It is about to get real.'));
console.log(anyPositive([-1,-2,-3,-4,-5]));
  }
  
  module.exports = anyPositive;
