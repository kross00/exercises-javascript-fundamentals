/**
 * Returns true if the given number is negative (less than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is negative and false otherwise
 */
function isNegative(num) {
if(num < 0 ) {
return true; 
}else{
    return false }
}

console.log(isNegative(-22));
console.log(isNegative(22));
