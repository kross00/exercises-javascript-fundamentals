/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
    let longestSoFar = array[0];
    for(let element of array){
        if (element.length > longestSoFar.length){
            longestSoFar = element 
        }
    }
    return longestSoFar 
  }


  if (require.main === module) {
    console.log('Running sanity checks for longest:');
  
    console.log(longest(['Kendahl','Ryan', 'Ross']));

console.log(longest(['School', 'Pineapple', 'Bow'])); 

   
  }
  
  module.exports = longest;
