const calcGreatestNumber = function(numberList) {
  let greatest = numberList[0];
  for(let index = 0; index < numberList.length; index++) {
     if(greatest < numberList[index]) {
      greatest = numberList[index];
    }
  }
  return greatest;
}
exports.calcGreatestNumber = calcGreatestNumber;

