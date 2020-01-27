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
      if(element.length < shortestSoFar.length){
          shortestSoFar = element;
      }
  }
  return shortestSoFar;
}

if (require.main === module) {
    console.log('Running sanity checks for shortest:');
  
    console.log(shortest(['hello','hey','hi']));

  }
  
  module.exports = shortest;

// it works now :D 
