var Series = function(inputNumber) {
  if( /[^0-9]/g.test(inputNumber) ) {
    throw new Error('Invalid input.')
  }

  this.number = inputNumber
};

Series.prototype.largestProduct = function(seriesNumber) {
  if( /[^0-9]/g.test(seriesNumber)) {
    throw new Error('Invalid input.')
  }
  if (seriesNumber > this.number.length) {
    throw new Error('Slice size is too big.')
  }

  let largestProduct = 0
  for (let i = 0; i <= this.number.length-seriesNumber; i++) {
    let currentSeries = this.number.slice(i, seriesNumber + i).split('')
    let currentProduct = currentSeries.reduce(function(accumulator, next) {
      return accumulator * next
    }, 1)
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct
    }
  }
  return largestProduct
};

module.exports = Series;
