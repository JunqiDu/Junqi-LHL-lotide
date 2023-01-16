//check two array equal or not
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {

    let tureNum = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        tureNum++;
      }
    }

    if (tureNum === array1.length) {
      return true;
    } else {
      return false;
    }
  }
}

//check two array assert equal
const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {

    let tureNum = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        tureNum++;
      }
    }

    if (tureNum === array1.length) {
      return true;
    } else {
      return false;
    }
  }
}

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
}