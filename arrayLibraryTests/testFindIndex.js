const findIndex = require('../mainFiles/library.js').findIndex;
const assert = require('assert'); 
//---check for empty array----
assert.equal(findIndex([],0),0);
//--------

//---check for one num----
assert.equal(findIndex([1],1),0);
//-------

//---check for two num-----
assert.equal(findIndex([4,7],7),1);
//-----------------

//----check for multiple even num---
assert.equal(findIndex([2,6,1,7,9,8],7),3);
//------------------
console.log("Tests Passed");
