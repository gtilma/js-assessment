exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timer;

    function sayCount () {
      console.log(start);
      start++;

      if (start <= end) timer = setTimeout(sayCount, 100);
    }

    sayCount();

    return {
      cancel: function() {
        if (timer) clearTimeout(timer);
      }
    };

  }
};
