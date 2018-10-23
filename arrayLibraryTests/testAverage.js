const assert = require('assert');
const calcAverage = require('../mainFiles/library.js').calcAverage;

//test for initial test
assert.equal(1,1);

//test for one element 
assert.equal(calcAverage([1]),1);

//test for two element 
assert.equal(calcAverage([2,5]),3.5);

//test for four element 
assert.equal(calcAverage([5,5,5,5]),5);

console.log("Tests Passed");










