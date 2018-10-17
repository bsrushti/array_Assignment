let numberList = [1,3,2,5,8,12];

const isEven = function(number) {
  let checkEven = (number % 2 == 0);
  if(checkEven) {
    return true;
  }
}

const evenNumberList = function(numberList) {
  let evenArray = [];
  for(let index = 0; index < numberList.length; index ++) {
    if(isEven(numberList[index])) {
      evenArray.push(numberList[index]);
    }
  }
  return evenArray;
}

exports.evenNumberList = evenNumberList;


