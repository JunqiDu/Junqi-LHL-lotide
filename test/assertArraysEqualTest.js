const assertArraysEqual = require('../assertArraysEqual');

if (assertArraysEqual.array1.length !== assertArraysEqual.array2.length) {
  return false;
} else {

  let tureNum = 0;
  for (let i = 0; i < assertArraysEqual.array1.length; i++) {
    if (assertArraysEqual.array1[i] === assertArraysEqual.array2[i]) {
      tureNum++;
    }
  }

  if (tureNum === assertArraysEqual.array1.length) {
    return true;
  } else {
    return false;
  }
}