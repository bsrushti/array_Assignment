const assert = require('assert');
const extractGreatestNumber = require('../mainFiles/library.js').extractGreatestNumber;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(extractGreatestNumber([1]),1);

//test for two element 
assert.equal(extractGreatestNumber([2,5]),5);

//test for four element 
assert.equal(extractGreatestNumber([5,9,12,4]),12);












