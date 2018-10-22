const assert = require('assert');
const rotateArray = require('../mainFiles/library.js').rotateArray;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(rotateArray([],0),[]);

//test for one element 
assert.deepEqual(rotateArray([1],0),[1]);

//test for two element 
assert.deepEqual(rotateArray([3,1],1),[1,3]);

//test for four element 
assert.deepEqual(rotateArray([1,4,2,6],3),[6,1,4,2]);


console.log("Tests Passed");










