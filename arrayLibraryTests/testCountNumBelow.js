const countNumbersBelow = require('../mainFiles/library.js').countNumbersBelow;
const assert = require('assert'); 
//---check for empty array----
assert.equal(countNumbersBelow([],0),0);
//--------

//---check for one num----
assert.equal(countNumbersBelow([1],1),0);
//-------

//---check for two num-----
assert.equal(countNumbersBelow([4,7],7),1);
//-----------------

//----check for multiple even num---
assert.equal(countNumbersBelow([2,6,1,7,9,8],7),3);
//------------------
