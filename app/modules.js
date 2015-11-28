exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    this.greeting = str1;
    this.name = str2;

    this.sayIt = function() {
      return this.greeting + ', ' + this.name;
    };

    return {
      greeting: this.greeting,
      name: this.name,
      sayIt: this.sayIt
    };
  }
};
