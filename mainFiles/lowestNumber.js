const calcLowestNumber = function(numberList) {
  let lowest = numberList[0];
  for(let index = 0; index < numberList.length; index++) {
     if(lowest > numberList[index]) {
      lowest = numberList[index];
    }
  }
  return lowest;
}
exports.calcLowestNumber = calcLowestNumber;

