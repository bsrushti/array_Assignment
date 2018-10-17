const assert = require('assert');
const reverseNum = require('../mainFiles/printReverseNumbers').reverseNum; 
//-- reverse 4 number --
let numberList = [1,3,6,8];
let expectedOpt = [ 8, 6, 3, 1 ];
assert.deepEqual(reverseNum(numberList),expectedOpt);





