const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  //object key to array and sort
  let keyArray1 = [];
  let keyArray2 = [];
  keyArray1 = Object.keys(actual).sort();
  keyArray2 = Object.keys(expected).sort();

  if (keyArray1.length === keyArray2.length) {
    for (let i = 0; i < keyArray1.length; i++) {
      if (keyArray1[i] !== keyArray2[i]) {
        return false;
      }else if (actual[keyArray1[i] !== expected[keyArray2[i]]]) {
        return false;
      }else{
        return true;
      }
    }
  } else {
    return false;
  }
  //object key match with value

};

console.log(`Example label: ${inspect(actual)}`);