const assert = require('assert');
const extractSmallerNumber = require('../mainFiles/library.js').extractSmallerNumber;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(extractSmallerNumber([1]),1);

//test for two element 
assert.equal(extractSmallerNumber([2,5]),2);

//test for four element 
assert.equal(extractSmallerNumber([5,9,12,4]),4);












