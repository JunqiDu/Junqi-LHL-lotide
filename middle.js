//find the middle of array
const middle = function (array) {
  let print = [];
  if (array.length < 3) {
    return print;
  } else if (array.length > 2 && array.length % 2 === 0) {
    print.push(array[array.length / 2 - 1]);
    print.push(array[array.length / 2]);
    return print;
  } else if (array.length > 2 && array.length % 2 !== 0) {
    print.push(array[(array.length - 1) / 2]);
    return print;
  }
};

//check two array equal or not
const eqArrays = require('./eqArrays');

//check two array assert equal
const assertArraysEqual = require('./assertArraysEqual');