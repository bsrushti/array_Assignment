const assert = require('assert');
//const lib = require('./libraryTest.js'); 

const logTests = function(funcName, inputs, actual, expected) {
  return justifier(funcName, JSON.stringify(inputs), JSON.stringify(actual), JSON.stringify(expected));
}

const spaces = function(length) {
  length = 25 - length;
  return new Array(length).fill(" ").join("");
}

const justifier = function(funcName, inputs, actual, expected) {
  let justifiedLine = '';
  justifiedLine += "| " + funcName + spaces(funcName.length);
  justifiedLine += "| " + inputs + spaces(inputs.length);
  justifiedLine += "| " + actual + spaces(actual.length);
  justifiedLine += "| " + expected + spaces(expected.length);
  return justifiedLine;
}

exports.logTests = logTests;






