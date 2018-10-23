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

const reverse = function(initialValue,secondValue) {
  return [secondValue].concat(initialValue);
}

const reverseArrayElements = function(numberList) {
  return numberList.reduce(reverse,[]);
}

/* Given a list of numbers, select every second one */

const selectSecondElement = function(object, element) {
  if(isEven(object.index)) {
    object.numbers.push(element);
  }
  object.index ++;
  return object;
}

const getSecondElements = function(numberList) {
  return numberList.reduce(selectSecondElement,{index:0,numbers:[]}).numbers;
}

/* Generate a fibonacci sequence of length n in reverse order */

const generateFibo = function(limit) {
  let series = [];
  let tempArray = [-1,1];
  for(let index = 0; index < limit; index ++) {
    tempArray[index] = tempArray[tempArray.length-2] + tempArray[tempArray.length-1];
    console.log(tempArray);
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

const isSmallest = function(number1, number2) {
  return number1 < number2;
}

const isGreatest = function(number1, number2) {
  return number1 > number2;
}

const countElementAboveThreshold = function(threshold) {
  let counter = 0;
  return function(numberList,element) {
    if(isGreatest(element,threshold)) {
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
    if(isSmallest(element,threshold)) {
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
  return numberList.indexOf(number);
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

const uniqElement = function(elements, element) {
  if(!elements.includes(element)) {
    elements.push(element);
  }
  return elements;
}

const getUniqElements = function(numberList) {
  return numberList.reduce(uniqElement,[]);
}

/* Given two arrays, generate a new array consisting of unique elements across both those arrays. */

const getUnion = function(numberList1, numberList2) {
  let setOne = getUniqElements(numberList1);
  let setTwo = getUniqElements(numberList2);
  let union = setOne.concat(setTwo);
  return getUniqElements(union);
}

/* Intersection of two arrays */

const intersectingElements = function(object, element) {
  if(object.array.includes(element)) {
    object.result.push(element);
  }
  object.index++;
  return object;
}

const getIntersection = function(numberList1, numberList2) {
  let smallList = getSmallest(numberList1,numberList2);
  let largeList = getGreatest(numberList1,numberList2);
  return smallList.reduce(intersectingElements,{index:0,result:[],array:largeList}).result;
}

/* Generate a new array that consists of unique elements 
 * that are present in the first array, but not in the second. */

const getDifferenceOfFirstSet = function(object, element) {
  if(!object.array.includes(element)) {
    object.result.push(element);
  }
  object.index++;
  return object;
}

const getDifferenceOfSet = function(numberList1, numberList2) {
  let setOne = getUniqElements(numberList1);
  let setTwo = getUniqElements(numberList2);
  return setOne.reduce(getDifferenceOfFirstSet,{index:0,result:[],array:numberList2}).result;
}

/* Given two arrays, check if the second is a proper subset of the first. */

const subset = function(object, element) {
  if(!object.array.includes(element)) {
    object.result = false;
  }
  object.index ++;
  return object;
}

const isSubset = function(numberList1,numberList2) {
  return numberList2.reduce(subset,{index:0, result: true, array: numberList1}).result;
}

/* Make the zip of two array */

const getMinLength = function(numberList1, numberList2) {
  return getSmallest(numberList1,numberList2);
}

const zipSet = function(object, element) {
  object.result[object.index] = [element,object.array[object.index]];
  object.index ++;
  return object;
}

const zip = function(numberList1, numberList2) {
  let smallList = getSmallest(numberList1,numberList2);
  let largeList = getGreatest(numberList1,numberList2);
  let zip = smallList.reduce(zipSet,{index : 0, result : [], array : largeList}).result;
  return zip;
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

const partitioner = function(threshold) {
  return function(array,element) {
    if(element <= threshold) {
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
}

const createPartition = function(numberList, number) {
  return numberList.reduce(partitioner(number),[[],[]]);
}

exports.extractOddNumber = extractOddNumber;
exports.extractEvenNumber = extractEvenNumber;
exports.sumOfNumbers = sumOfNumbers;
exports.reverseArrayElements = reverseArrayElements;
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
