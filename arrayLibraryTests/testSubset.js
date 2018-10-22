const assert = require('assert');
const isSubset = require('../mainFiles/library.js').isSubset;

//test for one element 
assert.equal(1,1);

//test for empty element from array
assert.equal(isSubset([],[]),true);

//test for one element 
assert.equal(isSubset([1],[1]),true);

//test for two element 
assert.equal(isSubset([2,1],[2,3]),false);

//test for four element 
assert.equal(isSubset([1,4,2,6],[1,2,4]),true);


console.log("Tests Passed");










