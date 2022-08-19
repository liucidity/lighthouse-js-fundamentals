function merge (arrayOne, arrayTwo) {
  //without using sort
  let arraysCombined = [];

  let i = 0, j = 0, k = 0;

  while ( i < arrayOne.length && j < arrayTwo.length) { //traverse both arrays
    if (arrayOne[i] < arrayTwo[j]){
      arraysCombined[k++] = arrayOne[i++];
    } else {
      arraysCombined[k++] = arrayTwo[j++];
    }
  }

  //compare numbers and add them to a new array

  while ( i < arrayOne.length ) {
    console.log(arrayOne[i])
    arraysCombined[k++] = arrayOne[i++];
  }

  while ( j < arrayTwo.length ) {
    arraysCombined[k++] = arrayTwo[j++];
  }
  return arraysCombined;
  
}

console.log(merge([ 4, 5, 6, 8, 22], [ 1, 2, 3, 4]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4, 7 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);