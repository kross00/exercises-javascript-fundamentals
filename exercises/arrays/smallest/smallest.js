/**
 * Given an array, returns the smallest element in the array.
 *
 * Assume the array contains only numbers.
 *
 * @param {number[]} array - The input array
 * @returns {number} The smallest element in the array
 */
function smallest(array) {
  let smallestSoFar = array[0];

  for (let element of array) {
    if (element < smallestSoFar) {
      smallestSoFar = element;
    }
  }

  return smallestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for smallest:');

  console.log(smallest([1, 2, 3]));

}

module.exports = smallest;
