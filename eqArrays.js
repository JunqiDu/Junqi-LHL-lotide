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

};

const eqArrays = require('./eqArrays'); 