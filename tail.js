const tail = function (words) {
  let newArray = [];
  if (words.length === 1) {
    newArray = words;
  } else {
    for (let i = 0; i < words.length; i++) {
      if (i !== 0) {
        newArray.push(words[i]);
      }
    }
  }
  return newArray;
};

const assertEqual = require('./assertEqual');