const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let key = metric;
  let scores = [];
  let winningScore = 0;

  // array of objects, loop through
  for (let i = 0; i < vegetables.length; i++){
    scores.push(vegetables[i][key])
  }
  winningScore = Math.max(...scores)
  console.log(Math.max(winningScore))
  return vegetables[scores.indexOf(winningScore)]['submitter'];
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)