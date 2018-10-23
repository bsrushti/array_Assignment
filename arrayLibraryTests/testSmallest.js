const assert = require('assert');
const extractSmallestNumber = require('../mainFiles/library.js').extractSmallestNumber;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(extractSmallestNumber([1]),1);

//test for two element 
assert.equal(extractSmallestNumber([2,5]),2);

//test for four element 
assert.equal(extractSmallestNumber([5,9,12,4]),4);












