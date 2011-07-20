exports.Strawberry = ->
  @color = "#ff0000"

exports.Strawberry:: = isTasty: ->
  true

exports.Banana = ->
  @color = "#fff333"

exports.Banana:: = 
  peel: (callback) ->
    process.nextTick ->
      callback null, new (exports.PeeledBanana)
  
  peelSync: ->
    new (exports.PeeledBanana)

exports.PeeledBanana = ->