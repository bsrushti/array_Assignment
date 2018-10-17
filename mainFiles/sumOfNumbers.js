let numberList = [1,2,3];
const sumOfNumbers = function(numberList) {
 let sum = 0;
  for(let index = 0; index < numberList.length; index ++) {
    sum = sum + numberList[index];
 }
  return sum;
}

exports.sumOfNumbers = sumOfNumbers;

