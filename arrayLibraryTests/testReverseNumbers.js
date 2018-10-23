const assert = require('assert');
const reverseArrayElements = require('../mainFiles/library').reverseArrayElements; 
//-- reverse 4 number --
let numberList = [1,3,6,8];
let expectedOpt = [ 8, 6, 3, 1 ];
assert.deepEqual(reverseArrayElements(numberList),expectedOpt);






