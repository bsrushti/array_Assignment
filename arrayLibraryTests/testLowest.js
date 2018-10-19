const assert = require('assert');
const calcLowestNumber = require('../mainFiles/library.js').calcLowestNumber;

//test for initial test
assert.equal(1,1);

//test for empty element from array
assert.equal(calcLowestNumber([]),undefined);

//test for one element 
assert.equal(calcLowestNumber([1]),1);

//test for two element 
assert.equal(calcLowestNumber([2,5]),2);

//test for four element 
assert.equal(calcLowestNumber([5,9,12,4]),4);


console.log("Test Passed");










