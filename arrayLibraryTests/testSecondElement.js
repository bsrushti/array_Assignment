const assert = require('assert');
const secondElementList = require('../mainFiles/library.js').getSecondElements;

//test for one element 
assert.deepEqual(1,1);

//test for empty element from array
assert.deepEqual(secondElementList([1,2]),[1]);

//test for one element from arrray
assert.deepEqual(secondElementList([1,5,2]),[ 1, 2 ]);

//test for two element from array
assert.deepEqual(secondElementList([1,5,2,7,1]),[ 1, 2, 1 ]);

//test for four element from array
assert.deepEqual(secondElementList([1,5,6,4,0,2,7,1,3]),[ 1, 6, 0, 7, 3 ]);












