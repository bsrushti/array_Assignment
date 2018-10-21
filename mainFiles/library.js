/* Given a list of numbers, select the ones that are odd */

const isOdd = function(number) {
  return (number % 2 != 0);
}

const extractOddNumber = function(numberList) {
  return numberList.filter(isOdd);
}

/* Given a list of numbers, select the ones that are even */

const isEven = function(number) {
  return  (number % 2 == 0);
}

const extractEvenNumber = function(numberList) {
  return numberList.filter(isEven);
}

/* Given a list of numbers, find the sum of all these numbers */
const sum = function(num1, num2) {
  return num1+num2;
}

const sumOfNumbers = function(numberList) {
  return numberList.reduce(sum);
}

/* Given a list of numbers, PRINT the list in reverse order */

const reverse = function(num1,num2) {
  return [num2].concat(num1);
}

const reverseNum = function(numberList) {
  return numberList.reduce(reverse);
}

/* Given a list of numbers, select every second one */

const selectSecondElement = function(element, index) {
  if(isEven(index)) {
    return [element];
  }
}

const getSecondElements = function(numberList) {
  return numberList.filter(selectSecondElement);
}

/* Generate a fibonacci sequence of length n in reverse order */

const generateFibo = function(limit) {
  let series = [];
  let tempArray = [-1,1];
  for(let index = 0; index < limit; index ++) {
    tempArray[index] = tempArray[tempArray.length-2] + tempArray[tempArray.length-1];
    series.push(tempArray[index]);
  }
  return series;
}

const reverseFibo = function(limit) {
  let fiboSeries = generateFibo(limit);
  return fiboSeries.reduce(reverse,[]);
}


/* Given a list of numbers, find the greatest number in that sequence */
const getGreatest = function(num1,num2) {
  if(num1 > num2) {
    return num1;
  }
  return num2;
}

const calcGreatestNumber = function(numberList) {
  return numberList.reduce(getGreatest);
}

/* Given a list of numbers, find the smallest number in that sequence */

const getSmallest = function(num1,num2) {
  if(num1 < num2) {
    return num1;
  }
  return num2;
}

const calcSmallestNumber = function(numberList) {
  return numberList.reduce(getSmallest);
}

/* Calculating average of given array elements */

const calcAverage = function(numberList) { 
  average = numberList.reduce(sum)/numberList.length;
  return average;
}

/* Given a list of names, generate another array 
   that contains the length of each of the names */

const getLength = function(name) {
  return name.length;
}

const getStringLength = function(listOfNames) {
  return listOfNames.map(getLength);
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

const countElementAboveThreshold = function(threshold) {
  let counter = 0;
  return function(numberList,element) {
    if(element > threshold) {
      counter ++;
    }
    return counter;
  }
}

const countNumbersAbove = function(numberList,number) {
  return numberList.reduce(countElementAboveThreshold(number),[]);
}

/* Count how many numbers below a certain threshold in an array*/

const countElementBelowThreshold = function(threshold) {
  let counter = 0;
  return function(numberList,element) {
    if(element < threshold) {
      counter ++;
    }
    return counter;
  }
}

const countNumbersBelow = function(numberList,number) {
  return numberList.reduce(countElementBelowThreshold(number),[]);
}

/* Reversing an Array */

const reverseArray = function(numberList) {
  return numberList.reduce(reverse,[]);
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

/* generate a new array consisting of unique elements that are contained in both arrays. */

const getDifferenceOfSet = function(numberList1, numberList2) {
  let resultSet = [];
  for(let index = 0; index < numberList1.length; index++ ) {
    let isInclude = !numberList2.includes(numberList1[index])
    if(isInclude) {
      resultSet.push(numberList1[index]);
    }
  }
  return resultSet;
}

/* Given two arrays, check if the second is a proper subset of the first. */

const isSubset = function(numberList1,numberList2) {
  let isSubset = true;
  let count = 0;
  for(let index = 0; index < numberList2.length; index++ ) {
    let isInclude = !numberList1.includes(numberList2[index])
    if(isInclude && count ==0 ) {
      count ++;
      isSubset = false;
    }
  }
  return isSubset;
}

/* Make the zip of two array */

const getMinLength = function(numberList1, numberList2) {
  if( numberList2.length < numberList1.length) {
    return numberList2.length;
  }
  return numberList1.length;
}

const zip = function(numberList1, numberList2) {
  let resultSet = [];
  let length = getMinLength(numberList1, numberList2);
  for(let index = 0; index < length; index ++) {
    let zipSet = [];
    zipSet.push(numberList1[index],numberList2[index]);
    resultSet.push(zipSet);
  }
  return resultSet;
}

/* creates a new array by rotating elements from the given array. */

const rotateArray = function(numberList, inputIndex) {
  let extractElements = [];
  let index = 0;
  while (index != inputIndex) {
    index ++;
    extractElements.push(numberList.shift());
  }
  return numberList.concat(extractElements);
}

/* Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number */

const createPartition = function(numberList, number) {
  let upPartition = [];
  let lowerPartition = [];
  let resultArray = [];
  for(let index = 0; index < numberList.length; index ++) {
    upPartition.push(numberList[index]);
    if(numberList[index] > number) {
      lowerPartition.push(numberList[index]);
      upPartition.pop();
    }
  }
  resultArray.push(upPartition,lowerPartition);
  return resultArray;
}

exports.extractOddNumber = extractOddNumber;
exports.extractEvenNumber = extractEvenNumber;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseNum = reverseNum;
exports.getSecondElements = getSecondElements;
exports.reverseFibo = reverseFibo;
exports.calcGreatestNumber = calcGreatestNumber;
exports.calcSmallestNumber = calcSmallestNumber;
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
exports.getDifferenceOfSet = getDifferenceOfSet;
exports.isSubset = isSubset;
exports.zip = zip;
exports.rotateArray = rotateArray;
exports.createPartition = createPartition;
