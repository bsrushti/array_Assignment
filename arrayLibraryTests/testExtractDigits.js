const extractDigits = require('../mainFiles/library.js').extractDigits;
const assert = require('assert'); 

//---check for one num----
assert.deepEqual(extractDigits(1),[1]);
//-------

//---check for two num-----
assert.deepEqual(extractDigits(47),[4,7]);
//-----------------

//----check for multiple even num---
assert.deepEqual(extractDigits(261798),[2,6,1,7,9,8]);
//------------------
