vows = require "vows"
assert = require "assert"

vows.describe("42").addBatch(
  "test 42": 
    topic: ->
      42
  
    "should be a number": (topic) ->
      assert.isNumber topic
  
    "should be equal to 42": (topic) ->
      assert.equal topic, 42
).export module