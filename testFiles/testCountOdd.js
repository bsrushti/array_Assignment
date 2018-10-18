const countOddNumbers = require('../mainFiles/library.js').countOddNumbers;
const assert = require('assert'); 
//---one even num----
//assert.equal(countOddNumbers([2]),0);
//-------

//---one odd num-----
assert.equal(countOddNumbers([3]),1);
//-----------------

//----multiple odd num---
assert.equal(countOddNumbers([2,6,1,7,9,3]),4);
//------------------
console.log("tests Passed");
