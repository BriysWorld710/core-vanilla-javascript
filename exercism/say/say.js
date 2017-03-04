var Say = function() {};

const textConversion = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion"
};

Say.prototype.inEnglish = function(number) {
  //inspired by: http://codereview.stackexchange.com/questions/124826/integer-to-english-challenge?noredirect=1&lq=1
  if (number < 0 || number > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }
  const numberArray = number.toString().split('').map(function(element) {
     return parseInt(element);
   });
  let translation = '';

  if (number == 0) {
    return 'zero'
  } else if (number <= 20) {
    translation = textConversion[number];
  } else if (numberArray.length < 3) {
    //tens conversion
    translation = [
      textConversion[numberArray[0]*10],
      textConversion[numberArray[1]]
    ].join('-');
  } else if (numberArray.length < 4) {
    //hundreds conversion
    if(number % 100 > 0) {
      translation = [
        textConversion[numberArray[0]],
        textConversion[100],
        this.inEnglish(number % 100)
      ].join(' ');
    } else {
      translation = [
        textConversion[numberArray[0]],
        textConversion[100]
      ].join(' ');
    }
  } else {
    //higher than hundreds
    const millOrBill = Math.pow(1000, Math.floor( (numberArray.length - 1) / 3) )
    if (number % millOrBill > 0) {
      translation = [
        this.inEnglish(Math.floor(number / millOrBill)),
        textConversion[millOrBill],
        this.inEnglish(number % millOrBill)
      ].join(' ');
    } else {
      translation = [
        this.inEnglish(Math.floor(number / millOrBill)),
        textConversion[millOrBill]
      ].join(' ');
    }
  }

  return translation.trim();
};

module.exports = Say;
