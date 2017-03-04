var Diamond = function() {};

Diamond.prototype.makeDiamond = function(input) {
  let letter = input.toUpperCase()
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let diamondLimit = alphabet.slice(0, alphabet.indexOf(letter)+1).split('')
  let diamondArray = []

  // for (let i = 0; i < alphabet.length; i++) {
  //   diamondLimit.push(alphabet[i])
  //   if (alphabet[i] === letter) {
  //     break;
  //   }
  // }

  let diamondSize = diamondLimit.length * 2 - 1

  for (let i = 0; i < diamondSize; i++) {
    diamondArray.push(Array(diamondSize).fill(' '))
  }
  let leftLetterPlacement = diamondLimit.length - 1
  let rightLetterPlacement = diamondLimit.length - 1

  let i = 0
  let j = 0
  while (i < diamondArray.length / 2) {
    diamondArray[i][rightLetterPlacement] = diamondLimit[j]
    diamondArray[i][leftLetterPlacement] = diamondLimit[j]
    rightLetterPlacement--
    leftLetterPlacement++
    j++
    i++
  }

  j = diamondLimit.length - 2
  while (i < diamondArray.length) {
    diamondArray[i] = diamondArray[j]
    j--
    i++
  }

  for ( let i = 0; i < diamondArray.length; i++) {
    diamondArray[i] = diamondArray[i].join('')
  }

  return diamondArray.join('\n') + "\n"
};

module.exports = Diamond;
