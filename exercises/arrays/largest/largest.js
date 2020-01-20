/**
 * Given an array, returns the largest element in the array.
 *
 * Assume the array contains only numbers.
 *
 * @param {number[]} array - The input array
 * @returns {number} The largest element in the array
 */
function largest(array) {
  let largestSoFar = array[0];

  for (let element of array) {
    if (element > largestSoFar) {
      largestSoFar = element;
    }
  }

  return largestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for largest:');
console.log(largest([1,2,3,4,5,7,1,2,3]));
}

module.exports = largest; 
