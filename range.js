function range(start,end,step) {
  let rangeArray = [];
  
  if(step <= 0 || start > end || (start == undefined || end == undefined || step == undefined)){
    return rangeArray;
  }

  let i = start;
  while (i <= end) {
    rangeArray.push(i)
    i += step
  }
  console.log(rangeArray);
  return rangeArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));