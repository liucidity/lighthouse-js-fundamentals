function smartGarbage(trash, bins) {
  let fieldName = trash;
  bins[fieldName] += 1;
  console.log(bins)
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });