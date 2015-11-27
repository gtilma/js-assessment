exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var deferred = $.Deferred();

    setTimeout(function() {
      deferred.resolve(value);
    }, 1);

    return deferred.promise(); 
  },

  manipulateRemoteData : function(url) {
    var deferred = $.Deferred();

    $.ajax(url).then(function(response) {
      deferred.resolve(
        response.people.map(function(person) {
          return person.name;
        }).sort()
      );
    });

    return deferred.promise();
  }
};
