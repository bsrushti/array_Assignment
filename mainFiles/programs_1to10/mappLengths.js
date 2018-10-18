/* Given a list of names, generate another array 
   that contains the length of each of the names */

const getStringLength = function(listOfNames) {
  lengthOfName = [];
  for(index in listOfNames) {
    lengthOfName[index] = listOfNames[index].length;
  }
  return lengthOfName;
}
exports.getStringLength = getStringLength;
