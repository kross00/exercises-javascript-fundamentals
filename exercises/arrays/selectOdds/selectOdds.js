/**
 * Given an array of integers, returns a new array consisting of only
 * the odd integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the odd numbers in the input array
 */
function selectOdds(array) {
  let count = [];
  for (let i of array){
      if(i%2!=0){
          count.push(i);
  }
  }
  return count;
}

if (require.main === module) {
    console.log('Running sanity checks for selectOdds:');
  console.log(selectOdds([1,2,3,4,5,29]));
   
  }
  
  module.exports = selectOdds;
