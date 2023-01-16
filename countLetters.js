const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('THEY ARE SAME!');
  } else {
    console.log('They are different!');
  }
};

const countLetters = function (sentence) {
  let numberObj = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!(sentence[i] in numberObj)) {
        numberObj[sentence[i]] = 1;
      } else {
        numberObj[sentence[i]] += 1;
      }
    }

  }

  return numberObj;
};

console.log(countLetters('lighthouse in the house'));