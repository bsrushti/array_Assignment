const checkAscending = require('../mainFiles/library.js').checkAscending;
const assert = require('assert'); 
//---check for empty array----
//assert.equal(checkAscending([]),true);
//--------

//---check for one num----
assert.equal(checkAscending([1]),true);
//-------

//---check for two num-----
assert.equal(checkAscending([4,7]),true);
//-----------------

//----check for multiple even num---
assert.equal(checkAscending([2,6,1,7,9,8]),false);
//------------------
console.log("Tests Passed");
