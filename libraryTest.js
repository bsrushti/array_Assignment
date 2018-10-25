const assert = require('assert');
const test = require('./arrayLibraryTests/testFrameWork.js').logTests; 
const lib = require('./mainFiles/library.js');

const assertEqual = function(actual, expected) {
  return assert.equal(actual, expected);
}

const assertDeepEqual = function(actual, expected) {
  return assert.deepEqual(actual, expected);
}

const repeatHyphen = function() {
  console.log(new Array(100).fill("-").join(""));
}

repeatHyphen();
//---------Avarage--------//
assertEqual(lib.calcAverage([1]),1);
console.log(test(lib.calcAverage.name,[1],1,1));

assertEqual(lib.calcAverage([2,5]),3.5);
console.log(test(lib.calcAverage.name,[2,5],3.5,3.5));

assertEqual(lib.calcAverage([5,5,5,5]),5);
console.log(test(lib.calcAverage.name,[5,5,5,5],5,5));
repeatHyphen();
//---------Ascending--------//

assertEqual(lib.checkAscending([1]),true);
console.log(test(lib.checkAscending.name,[1],true,true));

assertEqual(lib.checkAscending([4,7]),true);
console.log(test(lib.checkAscending.name,[4,7],true,true));

assertEqual(lib.checkAscending([2,6,1,7,9,8]),false);
console.log(test(lib.checkAscending.name,[2,6,1,7,9,8],false,false));
repeatHyphen();

//---------Descending--------//
assertEqual(lib.checkDescending([1]),true);
console.log(test(lib.checkDescending.name,[1],true,true));

assertEqual(lib.checkDescending([4,7]),false);
console.log(test(lib.checkDescending.name,[4,7],false,false));

assertEqual(lib.checkDescending([2,6,1,7,9,8]),false);
console.log(test(lib.checkDescending.name,[2,6,1,7,9,8],false,false));
repeatHyphen();

//---------countEvenNumbers--------//
assertEqual(lib.countEvenNumbers([1]),0);
console.log(test(lib.countEvenNumbers.name,[1],0,0));

assertEqual(lib.countEvenNumbers([4]),1);
console.log(test(lib.countEvenNumbers.name,[4],1,1));

assertEqual(lib.countEvenNumbers([2,6,1,7,9,8]),3);
console.log(test(lib.countEvenNumbers.name,[2,6,1,7,9,8],3,3));
repeatHyphen();

//---------countOddNumbers--------//
assertEqual(lib.countOddNumbers([2]),0);
console.log(test(lib.countOddNumbers.name,[2],0,0));

assertEqual(lib.countOddNumbers([3]),1);
console.log(test(lib.countOddNumbers.name,[3],1,1));

assertEqual(lib.countOddNumbers([2,6,1,7,9,8]),3);
console.log(test(lib.countOddNumbers.name,[2,6,1,7,9,8],3,3));
repeatHyphen();

//---------countNumbersAbove-------//
assertEqual(lib.countNumbersAbove([]),0);
console.log(test(lib.countNumbersAbove.name,[],0,0));

assertEqual(lib.countNumbersAbove([1],1),0);
console.log(test(lib.countNumbersAbove.name,[[1],1],0,0));

assertEqual(lib.countNumbersAbove([4,7],7),0);
console.log(test(lib.countNumbersAbove.name,[[4,7],0],0,0));
repeatHyphen();

//---------countNumbersBelow-------//
assertEqual(lib.countNumbersBelow([]),0);
console.log(test(lib.countNumbersBelow.name,[],0,0));

assertEqual(lib.countNumbersBelow([1],1),0);
console.log(test(lib.countNumbersBelow.name,[[1],1],0,0));

assertEqual(lib.countNumbersBelow([4,7],7),1);
console.log(test(lib.countNumbersBelow.name,[[4,7],1],1,1));
repeatHyphen();

//---------getDifferenceOfSet-------//
assertDeepEqual(lib.getDifferenceOfSet([],[]),[]);
console.log(test(lib.getDifferenceOfSet.name,[],[],[]));

assertDeepEqual(lib.getDifferenceOfSet([1],[1]),[]);
console.log(test(lib.getDifferenceOfSet.name,[[1],[1]],[],[]));

assertDeepEqual(lib.getDifferenceOfSet([2,1],[2,3]),[1]);
console.log(test(lib.getDifferenceOfSet.name,[[2,3],[2,3]],[1],[1]));
repeatHyphen();

//---------extractEvenNumber-------//
assertDeepEqual(lib.extractEvenNumber([1]),[]);
console.log(test(lib.extractEvenNumber.name,[1],[],[]));

assertDeepEqual(lib.extractEvenNumber([2,1]),[2]);
console.log(test(lib.extractEvenNumber.name,[2,1],[2],[2]));

assertDeepEqual(lib.extractEvenNumber([1,3,2,5,8,12]),[2,8,12]);
console.log(test(lib.extractEvenNumber.name,[1,3,2,5,8,12],[2,8,12],[2,8,12]));
repeatHyphen();

//---------extractOddNumber-------//
assertDeepEqual(lib.extractOddNumber([2]),[]);
console.log(test(lib.extractOddNumber.name,[1],[],[]));

assertDeepEqual(lib.extractOddNumber([2,1]),[1]);
console.log(test(lib.extractOddNumber.name,[2,1],[1],[1]));

assertDeepEqual(lib.extractOddNumber([1,3,2,5,8,12]),[1,3,5]);
console.log(test(lib.extractOddNumber.name,[1,3,2,5,8,12],[1,3,5],[1,3,5]));
repeatHyphen();

//---------extractDigits-------//
assertDeepEqual(lib.extractDigits(1),[1]);
console.log(test(lib.extractDigits.name,1,[1],[1]));

assertDeepEqual(lib.extractDigits(47),[4,7]);
console.log(test(lib.extractDigits.name,47,[4,7],[4,7]));

assertDeepEqual(lib.extractDigits(261798),[2,6,1,7,9,8]);
console.log(test(lib.extractDigits.name,261798,[2,6,1,7,9,8],[2,6,1,7,9,8]));
repeatHyphen();

//---------reverseFibo-------//
assertDeepEqual(lib.reverseFibo(0),[]);
console.log(test(lib.reverseFibo.name,0,[],[]));

assertDeepEqual(lib.reverseFibo(2),[1,0]);
console.log(test(lib.reverseFibo.name,2,[1,0],[1,0]));

assertDeepEqual(lib.reverseFibo(4),[2,1,1,0]);
console.log(test(lib.reverseFibo.name,4,[2,1,1,0],[2,1,1,0]));
repeatHyphen();

//---------findIndex-------//
assertDeepEqual(lib.findIndex([],0),-1);
console.log(test(lib.findIndex.name,[[],0],-1,-1));

assertDeepEqual(lib.findIndex([1],1),0);
console.log(test(lib.findIndex.name,[[1],1],0,0));

assertDeepEqual(lib.findIndex([4,7],7),1);
console.log(test(lib.findIndex.name,[[4,7],1],1,1));
repeatHyphen();

//---------extractGreaterNumber--------//
assertEqual(lib.extractGreaterNumber([1]),1);
console.log(test(lib.extractGreaterNumber.name,[1],1,1));

assertEqual(lib.extractGreaterNumber([2,5]),5);
console.log(test(lib.extractGreaterNumber.name,[2,5],5,5));

assertEqual(lib.extractGreaterNumber([5,9,12,4]),12);
console.log(test(lib.extractGreaterNumber.name,[5,9,12,4],12,12));
repeatHyphen();

//---------extractSmallerNumber--------//
assertEqual(lib.extractSmallerNumber([1]),1);
console.log(test(lib.extractSmallerNumber.name,[1],1,1));

assertEqual(lib.extractSmallerNumber([2,5]),2);
console.log(test(lib.extractSmallerNumber.name,[2,5],2,2));

assertEqual(lib.extractSmallerNumber([5,9,12,4]),4);
console.log(test(lib.extractSmallerNumber.name,[5,9,12,4],4,4));
repeatHyphen();

//---------getIntersection-------//
assertDeepEqual(lib.getIntersection([],[]),[]);
console.log(test(lib.getIntersection.name,[],[],[]));

assertDeepEqual(lib.getIntersection([1],[1]),[1]);
console.log(test(lib.getIntersection.name,[[1],[1]],[1],[1]));

assertDeepEqual(lib.getIntersection([1,4,2,6],[4,3,2,2]),[4,2]);
console.log(test(lib.getIntersection.name,[[1,4,2,6],[4,3,2,2]],[4,2],[4,2]));
repeatHyphen();

//---------getStringLength--------//
assertDeepEqual(lib.getStringLength([]),[]);
console.log(test(lib.getStringLength.name,[],[],[]));

assertDeepEqual(lib.getStringLength(["abc"]),[3]);
console.log(test(lib.getStringLength.name,["abc"],[3],[3]));

assertDeepEqual(lib.getStringLength(["srushti","apple"]),[7,5]);
console.log(test(lib.getStringLength.name,["srushti","apple"],[7,5],[7,5]));
repeatHyphen();

//---------createPartition--------//
assertDeepEqual(lib.createPartition([1],1),[[1],[]]);
console.log(test(lib.createPartition.name,[],[],[]));

assertDeepEqual(lib.createPartition([3,1],2),[[1],[3]]);
console.log(test(lib.createPartition.name,[[3,1],2],[[1],[3]],[[1],[3]]));

assertDeepEqual(lib.createPartition([1,4,2,6],4),[[1,4,2],[6]]);
console.log(test(lib.createPartition.name,[1,4,2,6],[[1,4,2],[6]],[[1,4,2],[6]]));
repeatHyphen();

//---------reverseArray--------//
assertDeepEqual(lib.reverseArray([]),[]);
console.log(test(lib.reverseArray.name,[],[],[]));

assertDeepEqual(lib.reverseArray([0]),[0]);
console.log(test(lib.reverseArray.name,[0],[0],[0]));

assertDeepEqual(lib.reverseArray([1,4,6,3]),[3,6,4,1]);
console.log(test(lib.reverseArray.name,[1,4,6,3],[3,6,4,1],[3,6,4,1]));
repeatHyphen();

//---------reverseArrayNumbers--------//
assertDeepEqual(lib.reverseArrayNumbers([]),[]);
console.log(test(lib.reverseArrayNumbers.name,[],[],[]));

assertDeepEqual(lib.reverseArrayNumbers([0]),[0]);
console.log(test(lib.reverseArrayNumbers.name,[0],[0],[0]));

assertDeepEqual(lib.reverseArrayNumbers([1,4,6,3]),[3,6,4,1]);
console.log(test(lib.reverseArrayNumbers.name,[1,4,6,3],[3,6,4,1],[3,6,4,1]));
repeatHyphen();

//---------rotateArray--------//
assertDeepEqual(lib.rotateArray([],0),[]);
console.log(test(lib.rotateArray.name,[[],0],[],[]));

assertDeepEqual(lib.rotateArray([1],0),[1]);
console.log(test(lib.rotateArray.name,[[1],0],[1],[1]));

assertDeepEqual(lib.rotateArray([1,4,2,6],3),[6,1,4,2]);
console.log(test(lib.rotateArray.name,[[1,4,2,6],3],[6,1,4,2],[6,1,4,2]));
repeatHyphen();

//---------getSecondNumbers--------//
assertDeepEqual(lib.getSecondNumbers([]),[]);
console.log(test(lib.getSecondNumbers.name,[],[],[]));

assertDeepEqual(lib.getSecondNumbers([1,2]),[1]);
console.log(test(lib.getSecondNumbers.name,[1,2],[1],[1]));

assertDeepEqual(lib.getSecondNumbers([1,5,2,7,1]),[1,2,1]);
console.log(test(lib.getSecondNumbers.name,[1,5,2,7,1],[1,2,1],[1,2,1]));
repeatHyphen();

//---------isSubset--------//
assertEqual(lib.isSubset([1],[1]),true);
console.log(test(lib.isSubset.name,[[1],[1]],true,true));

assertEqual(lib.isSubset([2,1],[2,3]),false);
console.log(test(lib.isSubset.name,[[2,1],[2,3]],false,false));

assertEqual(lib.isSubset([1,4,2,6],[1,2,4]),true);
console.log(test(lib.isSubset.name,[[1,4,2,6],[1,2,4]],true,true));
repeatHyphen();

//---------sumOFNumbers--------//
assertEqual(lib.sumOfNumbers([1]),1);
console.log(test(lib.sumOfNumbers.name,[1],1,1));

assertEqual(lib.sumOfNumbers([1,1]),2);
console.log(test(lib.sumOfNumbers.name,[1,1],2,2));

assertEqual(lib.sumOfNumbers([1,1,7,3]),12);
console.log(test(lib.sumOfNumbers.name,[1,1,7,3],12,12));
repeatHyphen();

//---------getUnion--------//
assertDeepEqual(lib.getUnion([],[]),[]);
console.log(test(lib.getUnion.name,[[],[]],[],[]));

assertDeepEqual(lib.getUnion([2,1],[2,3]),[2,1,3]);
console.log(test(lib.getUnion.name,[[2,1],[2,3]],[2,1,3],[2,1,3]));

assertDeepEqual(lib.getUnion([1,4,2,6],[7,3,2,2]),[1,4,2,6,7,3]);
console.log(test(lib.getUnion.name,[[1,4,6,2],[7,3,2,2]],[1,4,2,6,7,3],[1,4,2,6,7,3]));
repeatHyphen();

//---------getUniqElements--------//
assertDeepEqual(lib.getUniqElements([]),[]);
console.log(test(lib.getUniqElements.name,[],[],[]));

assertDeepEqual(lib.getUniqElements([1]),[1]);
console.log(test(lib.getUniqElements.name,[1],[1],[1]));

assertDeepEqual(lib.getUniqElements([2,2]),[2]);
console.log(test(lib.getUniqElements.name,[2,2],[2],[2]));
repeatHyphen();

//---------zip--------//
assertDeepEqual(lib.zip([1],[1]),[[1,1]]);
console.log(test(lib.zip.name,[[1],[1]],[[1,1]],[[1,1]]));

assertDeepEqual(lib.zip([2,1],[2,3]),[[2,2],[1,3]]);
console.log(test(lib.zip.name,[[2,1],[2,3]],[[2,2],[1,3]],[[2,2],[1,3]]));

assertDeepEqual(lib.zip([1,4,2,6],[1,2,4]),[[1,1],[2,4],[4,2]]);
console.log(test(lib.zip.name,[[1,4,2,6],[1,2,4]],[[1,1],[2,4],[4,2]],[[1,1],[2,4],[4,2]]));
repeatHyphen();





