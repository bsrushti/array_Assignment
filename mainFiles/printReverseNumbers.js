const reverseNum = function(numberList) {
  let reverseNumbers = [];
  let i = 0;
  for(let index = numberList.length-1; index >= 0 ; index --) {
    reverseNumbers[i] = numberList[index];  
    i++;
  }
  return reverseNumbers;
}

exports.reverseNum = reverseNum;

