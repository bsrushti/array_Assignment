const assert = require('assert');
const calcGreatestNumber = require('../mainFiles/greatestNumber.js').calcGreatestNumber;

//test for initial test
assert.equal(1,1);

//test for empty element from array
assert.equal(calcGreatestNumber([]),undefined);

//test for one element 
assert.equal(calcGreatestNumber([1]),1);

//test for two element 
assert.equal(calcGreatestNumber([2,5]),5);

//test for four element 
assert.equal(calcGreatestNumber([5,9,12,4]),12);


console.log("Test Passed");










