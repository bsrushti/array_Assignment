const assert = require('assert');
const createPartition = require('../mainFiles/library.js').createPartition;

//test for one element 
assert.deepEqual(1,1);

//test for one element 
assert.deepEqual(createPartition([1],1),[[1],[]]);

//test for two element 
assert.deepEqual(createPartition([3,1],2),[[1],[3]]);

//test for four element 
assert.deepEqual(createPartition([1,4,2,6],4),[[1,4,2],[6]]);


console.log("Tests Passed");










