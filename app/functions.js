exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item) {
      return function() { return fn(item); };
    });
  },

  partial : function(fn, str1, str2) {
    return function (str3) {
      return fn.call(this, str1, str2, str3);
    };
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments)
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.slice.call(arguments);

    args1.shift();
    return function() {
      var args2 = Array.prototype.slice.call(arguments),
          allArgs = args1.concat(args2);

      return fn.apply(this, allArgs);
    };
  },

  curryIt : function(fn) {
    
  }
};
