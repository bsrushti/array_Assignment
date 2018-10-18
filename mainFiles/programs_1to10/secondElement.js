let numberList = [1,5,2,7,1];
const selectSecondElement = function(numberList) {
  let secondElementList = [];
  let arrIndex = 0;
  for(let index = 2; index < numberList.length; index+=2) {
    secondElementList[arrIndex] = numberList[index];
    arrIndex ++;
  }
  console.log(secondElementList);
  return secondElementList;
}
selectSecondElement(numberList);
exports.selectSecondElement = selectSecondElement;














