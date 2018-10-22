const assert = require('assert');
const arrayLibrary = require('../mainFiles/library.js');

const logTests = function(inputArrray, actual, expected, funcName) {
  console.log("Testing Function",funcName.name);
  console.log("With inputs",inputArrray);
  console.log("Actual output :", actual);
  console.log("Expected output :",expected);
  console.log("Test Passed");
  console.log("------");
}
//--------
const testCalcAverage = function(inputArrray,expected) {
  let actual = arrayLibrary.calcAverage(inputArrray);
  assert.equal(actual,expected);
  logTests(inputArrray, actual, expected, testCalcAverage); 
}

testCalcAverage([1],1);
testCalcAverage([2,5],3.5);
testCalcAverage([5,5,5,5],5);
//---------

const checkAscending = function(inputArrray,expected) {
  let actual = arrayLibrary.checkAscending(inputArrray);
  assert.equal(actual,expected);
  logTests(inputArrray, actual, expected, checkAscending); 
}

checkAscending([1],true);
checkAscending([4,7],true);
checkAscending([2,6,1,7,9,8],false);

//---------

const checkDescending = function(inputArrray,expected) {
  let actual = arrayLibrary.checkDescending(inputArrray);
  assert.equal(actual,expected);
  logTests(inputArrray, actual, expected, checkDescending); 
}

checkDescending([1],true);
checkDescending([4,7],false);
checkDescending([2,6,1,7,9,8],false);

//---------

const countEvenNumbers = function(inputArrray,expected) {
  let actual = arrayLibrary.countEvenNumbers(inputArrray);
  assert.equal(actual,expected);
  logTests(inputArrray, actual, expected, countEvenNumbers); 
}

countEvenNumbers([1],0);
countEvenNumbers([4],1);
countEvenNumbers([2,6,1,7,9,8],3);

//---------

const countOddNumbers = function(inputArrray,expected) {
  let actual = arrayLibrary.countOddNumbers(inputArrray);
  logTests(inputArrray, actual, expected, countOddNumbers); 
  assert.equal(actual,expected);
}

countOddNumbers([2],0);
countOddNumbers([3],1);
countOddNumbers([2,6,1,7,9,8,3],4);

//---------

//const countNumbersAbove = function(inputArrray,number,expected) {
//  let actual = arrayLibrary.countNumbersAbove(inputArrray);
//  logTests(inputArrray, actual, expected, countNumbersAbove); 
//  assert.equal(actual,expected);
//}
//
//countNumbersAbove([1],1);
//countNumbersAbove([3],1);
//countNumbersAbove([2,6,1,7,9,8,3],4);
//
////---------
//
