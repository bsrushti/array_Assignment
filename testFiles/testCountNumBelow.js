const countNumbersAbove = require('../mainFiles/library.js').countNumbersAbove;
const assert = require('assert'); 
//---check for empty array----
//assert.equal(countNumbersAbove([],0),-1);
//--------

//---check for one num----
//assert.equal(countNumbersAbove([1],1),0);
//-------

//---check for two num-----
assert.equal(countNumbersAbove([4,7],4),1);
//-----------------

//----check for multiple even num---
//assert.equal(countNumbersAbove([2,6,1,7,9,8],6),4);
//------------------
console.log("tests Passed");