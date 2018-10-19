const assert = require('assert');
const getUnion = require('../mainFiles/library.js').getUnion;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(getUnion([],[]),[]);

//test for one element 
assert.deepEqual(getUnion([1],[1]),[1]);

//test for two element 
assert.deepEqual(getUnion([2,1],[2,3]),[2,1,3]);

//test for four element 
assert.deepEqual(getUnion([1,4,2,6],[7,3,2,2]),[1,4,2,6,7,3]);


console.log("Test Passed");










