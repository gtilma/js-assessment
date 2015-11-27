exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr) {
      return prev + curr;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    var left = arr.slice(0, index),
        right = arr.slice(index);

    left.push(item);
    return left.concat(right);
  },

  count : function(arr, item) {
    return arr.filter(function(val) {
      return val === item;
    }).length;
  },

  duplicates : function(arr) {
    var dups = [],
        inv = {};

    for (var i = 0, len = arr.length; i < len; i++) {
      inv[arr[i]] ? inv[arr[i]] += 1 : inv[arr[i]] = 1;
    }

    for (var key in inv) {
      if (inv[key] > 1) dups.push(parseInt(key));
    }

    return dups;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    arr.forEach(function(item, index) {
      if (item === target) indices.push(index);
    });
    return indices;
  }
};
