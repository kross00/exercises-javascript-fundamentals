/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */

 function remainderOf(num,div) {
let answer = num/div; 
let whole = parseInt(answer);
let final = whole*div;
let remainder = num-final;


if (remainder===0) { 
    return true; 
}else{
    return false; 
}
 }

 console.log(remainderOf(10,3));
 console.log(remainderOf(10,2));
