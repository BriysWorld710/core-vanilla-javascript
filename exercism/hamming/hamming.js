var Hamming = function() {};

Hamming.prototype.checkForSameLength = function(firstStrand, secondStrand) {
  return firstStrand.length === secondStrand.length ? true : false
}

Hamming.prototype.compute = function(firstStrand, secondStrand) {
  if (this.checkForSameLength(firstStrand, secondStrand)) {
    return firstStrand.split('').reduce( function(accumulator, current, index){
      return current !== secondStrand[index] ? accumulator + 1 : accumulator
    }, 0)
  } else {
    throw new Error('DNA strands must be of equal length.')
  }
};

module.exports = Hamming;
