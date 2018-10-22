const assert = require('assert');
const getUniqElements = require('../mainFiles/library.js').getUniqElements;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(getUniqElements([]),[]);

//test for one element 
assert.deepEqual(getUniqElements([1]),[1]);

//test for two element 
assert.deepEqual(getUniqElements([2,2]),[2]);

//test for four element 
assert.deepEqual(getUniqElements([2,5,1,5]),[2,5,1]);


console.log("Tests Passed");
