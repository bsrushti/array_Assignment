/* Calculating average of given array elements */

const calcAverage = function(numberList) {
  let average = 0;
  let sum = 0;
  for(let index = 0; index < numberList.length; index++) {
    sum = sum + numberList[index];
  }
  average = sum/numberList.length;
  return average;
}

exports.calcAverage = calcAverage;
