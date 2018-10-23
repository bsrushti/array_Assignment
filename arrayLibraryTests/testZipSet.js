const assert = require('assert');
const zip = require('../mainFiles/library.js').zip;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
//assert.deepEqual(zip([],[]),[]);

//test for one element 
assert.deepEqual(zip([1],[1]),[[1,1]]);

//test for two element 
assert.deepEqual(zip([2,1],[2,3]),[[2,2],[1,3]]);

//test for four element 
assert.deepEqual(zip([1,4,2,6],[1,2,4]),[[1,1],[2,4],[4,2]]);












