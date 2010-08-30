// Tests
var Levenshtein = require( '../lib/Levenshtein' )

exports['test Levenshtein correctness'] = function( assert ) {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
    , l2 = new Levenshtein( 'Saturday', 'Sunday' )

  assert.equal( 3, l1.distance, 'kitten <=> sitting' )
  assert.equal( 3, l2.distance, 'Saturday <=> Sunday' )
}

exports['test Levenshtein can be coerced to a number'] = function( assert ) {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
  assert.equal( l1.distance, l1 + 0 )
}

exports['test Levenshtein can be coerced to a string'] = function( assert ) {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
  assert.equal( l1.inspect(), new String(l1) )
}

