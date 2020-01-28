/**
 * Returns true if the given number is even false otherwise.
 *
 * An integer is odd if the remainder is 1 after dividing
 * by 2. Equivalently, an integer is odd if it can be written
 * as 2*k + 1 for some integer k.
 *
 * If an integer is not odd we call it "even".
 *
 * Even: -10, -12, -104, 0, 16, 18, 2
 * Odd: -11, -13, -103, -1, 1, 17, 19, 3
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function isOdd(num) {
    if(num%2!=0){
        return true;
    }else{
        return false; 
    }
    }
  
  
  if (require.main === module) {
    //let oddInputs = [1, 19, 99, 767];
  
    console.log('Running sanity checks for isOdd');
  
console.log(isOdd(8));
console.log(isOdd(81));
console.log(isOdd(24)); 


    }
  
  
  module.exports = isOdd;
  
