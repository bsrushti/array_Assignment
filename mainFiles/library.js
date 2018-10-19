/* Given a list of numbers, select the ones that are odd */

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



/* Given a list of numbers, select the ones that are even */
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


/* Given a list of numbers, find the sum of all these numbers */
const sumOfNumbers = function(numberList) {
 let sum = 0;
  for(let index = 0; index < numberList.length; index ++) {
    sum = sum + numberList[index];
 }
  return sum;
}


/* Given a list of numbers, PRINT the list in reverse order */

const reverseNum = function(numberList) {
  let reverseNumbers = [];
  let i = 0;
  for(let index = numberList.length-1; index >= 0 ; index --) {
    reverseNumbers[i] = numberList[index];  
    i++;
  }
  return reverseNumbers;
}


/* Given a list of numbers, select every second one */
const selectSecondElement = function(numberList) {
  let secondElementList = [];
  let arrIndex = 0;
  for(let index = 2; index < numberList.length; index+=2) {
    secondElementList[arrIndex] = numberList[index];
    arrIndex ++;
  }
  return secondElementList;
}

/* Generate a fibonacci sequence of length n in reverse order */

const generateFibo = function(limit) {
  let series = [];
  let tempArray = [-1,1];
  for(let index = 0; index < limit; index ++) {
    tempArray[index] = tempArray[tempArray.length-2] + tempArray[tempArray.length-1];
    series[index] = tempArray[index];
  }
  return series;
}

const reverseFibo = function(limit) {
  let fiboSeries = generateFibo(limit);
  let reverseSeries = [];
  let reverseIndex = 0;
  for(let index = fiboSeries.length-1; index >= 0; index --) {
    reverseSeries[reverseIndex] = fiboSeries[index];
    reverseIndex ++;
  }
  return reverseSeries;
}


/* Given a list of numbers, find the greatest number in that sequence */

const calcGreatestNumber = function(numberList) {
  let greatest = numberList[0];
  for(let index = 0; index < numberList.length; index++) {
     if(greatest < numberList[index]) {
      greatest = numberList[index];
    }
  }
  return greatest;
}

const calcLowestNumber = function(numberList) {
  let lowest = numberList[0];
  for(let index = 0; index < numberList.length; index++) {
     if(lowest > numberList[index]) {
      lowest = numberList[index];
    }
  }
  return lowest;
}

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

/* Given a list of names, generate another array 
   that contains the length of each of the names */

const getStringLength = function(listOfNames) {
  lengthOfName = [];
  for(index in listOfNames) {
    lengthOfName[index] = listOfNames[index].length;
  }
  return lengthOfName;
}

/* function to count odd numbers present in an array */

const countOddNumbers = function(numberList) {
  let oddNumbers = extractOddNumber(numberList);
  return oddNumbers.length;
}

/* function to count even numbers present in an array */

const countEvenNumbers = function(numberList) {
  let evenNumbers = extractEvenNumber(numberList);
  return evenNumbers.length;
}

/* Count how many numbers above a certain threshold in an array */

const countNumbersAbove = function(numberList,number) {
  let count = 0;
  for(index in numberList) {
    if(number < numberList[index]) {
      count ++;
    }
  }
  return count;
}

/* Count how many numbers below a certain threshold in an array*/

const countNumbersBelow = function(numberList,number) {
  let count = 0;
  for(index in numberList) {
    if(number > numberList[index]) {
      count ++;
    }
  }
  return count;
}

/* Reversing an Array */

const reverseArray = function(numberList) {
  let reverseArrayElements = [];
  let reverseArrayIndex = 0;
  for(let index = numberList.length-1; index >= 0; index--) {
    reverseArrayElements[reverseArrayIndex] = numberList[index];
    reverseArrayIndex ++;
  }
  return reverseArrayElements;
}

/* Given an array of numbers find the first position of a specified number */

const findIndex = function(numberList,number) {
  let count = 1;
  let resultIndex = 0;
  for(let index = 0; index <= numberList.length-1; index++) {
    if(number == numberList[index] && count == 1) {
      count ++;
      resultIndex = index;
    }
  }
  return resultIndex;
}

/* Given an array of numbers, check if the array is in ascending order */

const checkAscending = function(numberList) {
  let isAscending = true;
  for(let index = 0; index <= numberList.length-1; index++) {
    if(numberList[index] > numberList[index+1]) {
      isAscending = false;
    }
  }
  return isAscending;
}

/* Given an array of numbers, check if the array is in descending order */

const checkDescending = function(numberList) {
  let isDescending = true;
  for(let index = 0; index <= numberList.length-1; index++) {
    if(numberList[index] < numberList[index+1]) {
      isDescending = false;
    }
  }
  return isDescending;
}

/* Given a number, extract the digits of a number into an array: */

const extractDigits = function(number) {
  let numberList = []; 
  while (number != 0) {
    let remainder = number % 10;
    numberList.unshift(remainder);
    number = Math.floor(number / 10);
  }
  return numberList;
}

/* Given an array, remove duplicate elements and return an array of only unique elements. */

const getUniqElements = function(numberList) {
  let uniqElements = [];
  for(let index = 0; index < numberList.length; index++ ) {
    let isInclude = !uniqElements.includes(numberList[index]);
    if(isInclude) {
    uniqElements.push(numberList[index]);
    }
  }
  return uniqElements;
}

/* Given two arrays, generate a new array consisting of unique elements across both those arrays. */

const getUnion = function(numberList1, numberList2) {
  let uniqArray_1 = getUniqElements(numberList1);
  let uniqArray_2 = getUniqElements(numberList2);
  let union = uniqArray_1.concat(uniqArray_2);
  return getUniqElements(union);
}

/* Intersection of two arrays */

const getCommonElements = function(numberList) {
  let commonElements = [];
  for(let index = 0; index < numberList.length; index++ ) {
    let element = numberList.shift();
    let isInclude = numberList.includes(element);
    if(isInclude) {
    commonElements.push(element);
    }
  }
  return commonElements;
}

const getIntersection = function(numberList1, numberList2) {
  let uniqArray_1 = getUniqElements(numberList1);
  let uniqArray_2 = getUniqElements(numberList2);
  let union = uniqArray_1.concat(uniqArray_2);
  let intersection = getCommonElements(union);
  return intersection;
}

exports.extractOddNumber = extractOddNumber;
exports.extractEvenNumber = extractEvenNumber;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseNum = reverseNum;
exports.selectSecondElement = selectSecondElement;
exports.reverseFibo = reverseFibo;
exports.calcGreatestNumber = calcGreatestNumber;
exports.calcLowestNumber = calcLowestNumber;
exports.calcAverage = calcAverage;
exports.getStringLength = getStringLength;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.reverseArray = reverseArray;
exports.findIndex = findIndex; 
exports.checkAscending = checkAscending ;
exports.checkDescending = checkDescending ;
exports.extractDigits = extractDigits;
exports.getUniqElements = getUniqElements;
exports.getUnion = getUnion;
exports.getIntersection = getIntersection;
