const judgeVegetable = function (vegetables, metric) {
  var grade = 0
  var name = "" 
  for(const veg of vegetables) {
    if (veg[metric] > grade) {
      grade = veg[metric]
      name = veg["submitter"]
    }
  }
  return name
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

console.log(judgeVegetable(vegetables, metric))