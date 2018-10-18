const isOdd = function(number) {
  let checkOdd = (number % 2 != 0);
  if(checkOdd) {
    return true;
  }
}

const extractOddNumber = function(numberList) {
  let oddArray = [];
  for(let index = 0; index < numberList.length; index ++) {
    if(isOdd(numberList[index])) {
      oddArray.push(numberList[index]);
    }
  }
  return oddArray;
}

exports.extractOddNumber = extractOddNumber;


