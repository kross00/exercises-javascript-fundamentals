function countLessThan(array, num) {
    let count = 0;
   for(let i of array) {
       if (i<num){
           count++; 
       }
      
  }
  return count;
}


if (require.main === module) {
    console.log('Running sanity checks for countLessThan:');
    console.log(countLessThan([1,2,3,4,5], 4)==3);

}
module.exports = countLessThan;
  
