const assert = require('assert');
const giveStringLength = require('../mapFiles/mappLength.js').giveStringLength;

let expectedOpt = [5];
let inputString = "hello";
let output = giveStringLength(inputString);
assert.deepEqual(output,expectedOpt,"output did not match");


