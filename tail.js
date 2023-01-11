const words = ["Yo Yo", "Lighthouse", "Labs"];
function tail(words) {
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
}

console.log(words.length, 3);