var Bob = function() {};

Bob.prototype.hey = function(what) {
  if (/([A-Z]+\s){2,}|[A-Z](?=!)/.test(what)) {
    return 'Whoa, chill out!'
  } else if (/(.+)(?=\?)/.test(what)) {
    return 'Sure.'
  } else if (!what) {
    return 'Fine. Be that way!'
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;
