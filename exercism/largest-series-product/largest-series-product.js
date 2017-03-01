var Series = function(inputNumber) {
  this.number = inputNumber
};

Series.prototype.largestProduct = function(seriesNumber) {
  let largestProduct = 0
  for (let i = 0; i < inputNumber.length-seriesNumber; i++) {
    let currentSeries = []
    let k = i
    while (currentSeries.length < seriesNumber) {
      currentSeries.push(inputNumber[k])
      k++
    }
    //multiply all the numbers in currentSeries
    let currentProduct = currentSeries.reduce(function(accumulator, next) {
      return accumulator * next
    }, 1)
    //if the product of that  > largestProduct then assign that to largestProduct
  }
};

module.exports = Series;
