const assert = require('assert'); 
const sumOfNumbers = require('../mainFiles/sumOfNumbers.js').sumOfNumbers; 
//--sum of one num --
assert.equal(sumOfNumbers([1]),1);

//--sum of two num --
assert.equal(sumOfNumbers([1,1]),2);

//--sum of two num --
assert.equal(sumOfNumbers([1,1,7,3]),12);
//---------
console.log("Tests Passed");













