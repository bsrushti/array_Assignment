const selectSecondElement = function(numberList) {
  let secondElementList = [];
  for(let index = 2; index < numberList.length; index++) {
    secondElementList = secondElementList + numberList[index];
  }
  return secondElementList;
}

exports.selectSecondElement = selectSecondElement;














