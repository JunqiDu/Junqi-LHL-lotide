const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i]);
  }
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray.push(itemsToRemove[i]);
  }

  let filterNonUnique = newArray => newArray.filter(i => newArray.indexOf(i) === newArray.lastIndexOf(i));
  let print = filterNonUnique(newArray);
  return print;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));