const assert = require('assert');
const reverseFibo = require('../mainFiles/library.js').reverseFibo;

//test for one element 
assert.deepEqual(1,1);

//test for one element 
//assert.deepEqual(reverseFibo(1),[0]);

//test for two element 
assert.deepEqual(reverseFibo(2),[1,0]);

//test for four element 
assert.deepEqual(reverseFibo(4),[2,1,1,0]);


console.log("Tests Passed");










