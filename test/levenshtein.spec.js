// Tests
// Run with `expresso` from the toplevel directory.
var Levenshtein = require( '../lib/levenshtein' )
var assert = require( 'assert' )

exports['test Levenshtein correctness'] = function() {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
    , l2 = new Levenshtein( 'Saturday', 'Sunday' )

  assert.equal( 3, l1.distance, 'kitten <=> sitting' )
  assert.equal( 3, l2.distance, 'Saturday <=> Sunday' )
}

exports['test Levenshtein can be coerced to a number'] = function() {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
  assert.equal( l1.distance, l1 + 0 )
}

exports['test Levenshtein can be coerced to a string'] = function() {
  var l1 = new Levenshtein( 'kitten', 'sitting' )
  assert.equal( l1.inspect(), new String(l1) )
}

