(function() {
  exports.Strawberry = function() {
    return this.color = "#ff0000";
  };
  exports.Strawberry.prototype = {
    isTasty: function() {
      return true;
    }
  };
  exports.Banana = function() {
    return this.color = "#fff333";
  };
  exports.Banana.prototype = {
    peel: function(callback) {
      return process.nextTick(function() {
        return callback(null, new exports.PeeledBanana);
      });
    },
    peelSync: function() {
      return new exports.PeeledBanana;
    }
  };
  exports.PeeledBanana = function() {};
}).call(this);
