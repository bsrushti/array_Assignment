const assert = require('assert');
const reverseList = require('../mainFiles/library').reverseList; 
//-- reverse 4 number --
let numberList = [1,3,6,8];
let expectedOpt = [ 8, 6, 3, 1 ];
assert.deepEqual(reverseList(numberList),expectedOpt);

console.log("Tests Passed");





