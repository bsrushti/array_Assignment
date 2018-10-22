const assert = require('assert');
const calcSmallestNumber = require('../mainFiles/library.js').calcSmallestNumber;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(calcSmallestNumber([1]),1);

//test for two element 
assert.equal(calcSmallestNumber([2,5]),2);

//test for four element 
assert.equal(calcSmallestNumber([5,9,12,4]),4);


console.log("Tests Passed");










