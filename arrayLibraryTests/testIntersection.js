const assert = require('assert');
const getIntersection = require('../mainFiles/library.js').getIntersection;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(getIntersection([],[]),[]);

//test for one element 
assert.deepEqual(getIntersection([1],[1]),[1]);

//test for two element 
assert.deepEqual(getIntersection([2,1],[2,3]),[2]);

//test for four element 
assert.deepEqual(getIntersection([1,4,2,6],[4,3,2,2]),[4,2]);












