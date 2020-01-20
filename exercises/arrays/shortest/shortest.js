/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  let shortestSoFar = array[0];
  for(let element of array){
      if(element.length < shortestSoFar){
          shortestSoFar = element;
      }
  }
  return shortestSoFar;
}

if (require.main === module) {
    console.log('Running sanity checks for shortest:');
  console.log(shortestSoFar(['hello','hey','hi']));

  }
// i could not get this one to function 
  
  module.exports = shortest;
