const assert = require('assert');
const reverseArray = require('../mainFiles/library.js').reverseArray;

//test for initital test 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(reverseArray([]),[]);

//test for one element 
assert.deepEqual(reverseArray([0]),[0]);

//test for two element 
assert.deepEqual(reverseArray([2,3]),[3,2]);

//test for four element 
assert.deepEqual(reverseArray([1,4,6,3]),[3,6,4,1]);


console.log("Test Passed");










