var Garden = function(diagram, students=[
  'Alice','Bob','Charlie','David',
  'Eve','Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'
]) {
  this.diagram = diagram.split('\n')
  this.students = students.sort()

  var splitRowOne = this.diagram[0].split('')
  var splitRowTwo = this.diagram[1].split('')
  var plantPairsRowOne = []
  var plantPairsRowTwo = []
  var plants = {
    C: "clover",
    G: "grass",
    V: "violets",
    R: "radishes"
  }

  while(splitRowOne.length > 0) {
    plantPairsRowOne.push(splitRowOne.splice(0,2))
  }

  while(splitRowTwo.length > 0) {
    plantPairsRowTwo.push(splitRowTwo.splice(0,2))
  }

  // make an array that combines the index values in plantPairsRowOne & plantPairsRowTwo
  var plantLettersAssigned = []
  for (var i = 0; i < plantPairsRowOne.length; i++) {
    plantLettersAssigned.push(plantPairsRowOne[i].concat(plantPairsRowTwo[i]))
  }

  var plantAssignments = plantLettersAssigned.map(function(element) {
    return element.map(function(letter){
      return plants[letter]
    })
  })

  //loop through this.students, create this[students[i]] = [plantAssignments[i]]
  i = 0
  while (i < this.students.length) {
    this[students[i].toLowerCase()] = plantAssignments[i]
    i++
  }

};


module.exports = Garden;
