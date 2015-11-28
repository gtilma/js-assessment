exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var b = num.toString(2);
    return parseInt(b[b.length-bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var b = num.toString(2);

    while (b.length < 8) {
      b = '0' + b;
    }

    return b;
  },

  multiply: function(a, b) {

  }
};
