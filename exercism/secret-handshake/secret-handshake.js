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
let handshakeArray = []

while (number >= 1) {
  binaryArray.unshift(number%2)
  number = Math.floor(number/2)
}

let binaryNumber = parseInt(binaryArray.join(''))

const shakes = {
  "jump": 1000,
  "close your eyes": 100,
  "double blink": 10,
  "wink": 1
  // 10000: function() {
  //   //reverse order of operations
  // }
}

if (binaryNumber >= 10000) {
  var pushHandshakes = function(input) {
    handshakeArray.push(input)
  }
  binaryNumber -= 10000
} else {
  var pushHandshakes = function(input) {
    handshakeArray.unshift(input)
  }

}

for (let key in shakes) {
  if (binaryNumber >= shakes[key]) {
    pushHandshakes(key)
    binaryNumber -= shakes[key]
  }
}

return handshakeArray

};

module.exports = SecretHandshake;
