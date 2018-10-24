const assert = require('assert');
const extractGreaterNumber = require('../mainFiles/library.js').extractGreaterNumber;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(extractGreaterNumber([1]),1);

//test for two element 
assert.equal(extractGreaterNumber([2,5]),5);

//test for four element 
assert.equal(extractGreaterNumber([5,9,12,4]),12);














