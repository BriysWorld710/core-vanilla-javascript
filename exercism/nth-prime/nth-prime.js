var Prime = function() {};

Prime.prototype.isPrime = function(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

Prime.prototype.nth = function(givenNth) {
  if (givenNth < 1) {
    throw new Error('Prime is not possible')
  }
  //count up towards infinity
  //check each number along the way
  //for every prime number found, increase a counter
  //once the counter hits givenNth stop the counting to infinity
  //return the current number
  let primeCounter = 0
  let currentNumber = 1
  while(primeCounter < givenNth) {
    if (this.isPrime(currentNumber)) {
      primeCounter += 1
      nthValue = currentNumber
    }
    currentNumber++
  }

  return nthValue
};

module.exports = Prime;
