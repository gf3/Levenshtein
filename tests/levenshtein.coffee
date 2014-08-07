assert      = require 'assert'
Levenshtein = require '../lib/levenshtein'

describe 'Levenshtein', ->

  it 'should be correct', ->
    l1 = new Levenshtein 'kitten', 'sitting'
    l2 = new Levenshtein 'Saturday', 'Sunday'

    assert.equal 3, l1.distance
    assert.equal 3, l2.distance

  it 'can be coerced to a number', ->
    l1 = new Levenshtein 'kitten', 'sitting'
    assert.equal l1.distance, l1 + 0

  it 'can be coerced to a string', ->
    l1 = new Levenshtein 'kitten', 'sitting'
    assert.equal l1.inspect(), new String l1

  it 'matrix can be retrieved', ->
    l1 = new Levenshtein 'kitten', 'sitting'
    assert.ok l1.matrix instanceof Array
    assert.ok l1.matrix[0].length
    assert.ok l1.matrix[0] instanceof Array
