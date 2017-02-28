var SecretHandshake = function(input) {
  if (typeof input !== 'number') {
    throw new Error('Handshake must be a number')
  }
  this.number = input
};

SecretHandshake.prototype.commands = function() {
  //convert this.number to binary
  let number = this.number
  let binaryArray = []

  while (number >= 1) {
    converted.unshift(number%2)
    number = Math.floor(number/2)
  }

  let binaryNumber = parseInt(binaryArray.join(''))
  //

  const shakes = {
    1: "wink"
    10: "double blink"
    100: "close your eyes"
    1000: "jump"
    10000: function() {
      //reverse order of operations
    }
  }
};

module.exports = SecretHandshake;
