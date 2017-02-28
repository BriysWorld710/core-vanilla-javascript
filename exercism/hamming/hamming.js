var Hamming = function() {};

Hamming.prototype.checkForSameLength = function(firstStrand, secondStrand) {
  if (firstStrand.length === secondStrand.length) {
    return true;
  }
  return false;
}

Hamming.prototype.compute = function(firstStrand, secondStrand) {
  if (this.checkForSameLength(firstStrand, secondStrand)) {
    let firstArray = firstStrand.split('');
    let secondArray = secondStrand.split('');
    let hammingDistance = 0
    for (var i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        hammingDistance++
      }
    }
    return hammingDistance
  } else {
    throw new Error('DNA strands must be of equal length.')
  }
};

module.exports = Hamming;
