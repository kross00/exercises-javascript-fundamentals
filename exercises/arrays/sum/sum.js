/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
    let count = 0;
for(let i in array){
    count+=array[i];
}
return count;
  }
  
  if (require.main === module) {
    console.log('Running sanity checks for sum:');
  let array = [3,4,5,6,7,2];
    console.log(sum(array));
    
  }
  
  module.exports = sum;
  
