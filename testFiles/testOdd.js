const oddNumberList = require('../mainFiles/library.js').extractOddNumber;
const assert = require('assert'); 
let expectedOpt = [];
let numberList = [];
//---one even num----
expectedOpt = [];
numberList = [2];
output = oddNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//-------

//---one odd num-----
expectedOpt = [1];
numberList = [1,2];
output = oddNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//-----------------

//----multiple odd num---
expectedOpt = [ 1, 3, 5 ];
numberList = [1,3,2,5,8,12];
output = oddNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//------------------
console.log("tests Passed");
