const evenNumberList = require('../mainFiles/library.js').extractEvenNumber;
const assert = require('assert'); 
let expectedOpt = [];
let numberList = [];
//---one odd num----
expectedOpt = [];
numberList = [1];
output = evenNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//-------

//---one odd num-----
expectedOpt = [2];
numberList = [2,1];
output = evenNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//-----------------

//----multiple even num---
expectedOpt = [ 2, 8, 12 ];
numberList = [1,3,2,5,8,12];
output = evenNumberList(numberList);
assert.deepEqual(output,expectedOpt);
//------------------
