function lastIndexOf(arrayToIndex, target) {
  let listOfOcurrence = [];

  for (let i = 0; i < arrayToIndex.length; i++) {
    if (arrayToIndex[i] == target) {
      listOfOcurrence.push(i)
    }
  }
  if (listOfOcurrence.length == 0){
    return -1;
  } else {
    return listOfOcurrence.pop();
  }
  
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);