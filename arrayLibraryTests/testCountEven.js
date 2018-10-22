const countEvenNumbers = require('../mainFiles/library.js').countEvenNumbers;
const assert = require('assert'); 
//---one even num----
assert.equal(countEvenNumbers([1]),0);
//-------

//---one even num-----
assert.equal(countEvenNumbers([4]),1);
//-----------------

//----multiple even num---
assert.equal(countEvenNumbers([2,6,1,7,9,8]),3);
//------------------
console.log("Tests Passed");
