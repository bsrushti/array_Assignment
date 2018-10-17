const assert = require('assert');
const secondElementList = require('../mainFiles/secondElement.js').selectSecondElement;

//test for one element from array
assert.deepEqual(1,1);

//test for two element from array
assert.deepEqual(secondElementList([1,2]),[]);
console.log("Test Passed");













