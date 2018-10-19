const assert = require('assert');
const getDifferenceOfSet = require('../mainFiles/library.js').getDifferenceOfSet;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(getDifferenceOfSet([],[]),[]);

//test for one element 
assert.deepEqual(getDifferenceOfSet([1],[1]),[]);

//test for two element 
assert.deepEqual(getDifferenceOfSet([2,1],[2,3]),[1]);

//test for four element 
assert.deepEqual(getDifferenceOfSet([1,4,2,6],[4,3,2,2]),[1,6]);


console.log("Test Passed");










