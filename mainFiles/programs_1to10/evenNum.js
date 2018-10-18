
const isEven = function(number) {
  let checkEven = (number % 2 == 0);
  if(checkEven) {
    return true;
  }
}

const extractEvenNumber = function(numberList) {
  let evenArray = [];
  for(let index = 0; index < numberList.length; index ++) {
    if(isEven(numberList[index])) {
      evenArray.push(numberList[index]);
    }
  }
  return evenArray;
}

exports.extractEvenNumber = extractEvenNumber;


