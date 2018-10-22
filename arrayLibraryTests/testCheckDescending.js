const checkDescending = require('../mainFiles/library.js').checkDescending;
const assert = require('assert'); 
//---check for empty array----
assert.equal(checkDescending([]),true);
//--------

//---check for one num----
assert.equal(checkDescending([1]),true);
//-------

//---check for two num-----
assert.equal(checkDescending([4,7]),false);
//-----------------

//----check for multiple even num---
assert.equal(checkDescending([2,6,1,7,9,8]),false);
//------------------
console.log("Tests Passed");
