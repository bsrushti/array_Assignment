const assert = require('assert');
const getStringLength = require('../mainFiles/library.js').getStringLength;

//test for empty array
assert.deepEqual(getStringLength([]),[]);

//test for one string
assert.deepEqual(getStringLength(["abc"]),[3]);

//test for two string
assert.deepEqual(getStringLength(["srushti","apple"]),[7,5]);

//test for four string
assert.deepEqual(getStringLength(["apple","orange","butterfruit","mango"]),[5,6,11,5]);

console.log("tests passed");

