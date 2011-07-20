(function() {
  var assert, vows;
  vows = require("vows");
  assert = require("assert");
  vows.describe("42").addBatch({
    "test 42": {
      topic: function() {
        return 42;
      },
      "should be a number": function(topic) {
        return assert.isNumber(topic);
      },
      "should be equal to 42": function(topic) {
        return assert.equal(topic, 42);
      }
    }
  })["export"](module);
}).call(this);
