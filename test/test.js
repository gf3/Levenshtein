;(function() {

  /** Used as a reference to the global object */
  var root = typeof global == 'object' && global || this

  /** Method and object shortcuts */
  var phantom = root.phantom,
      amd = root.define && define.amd,
      document = !phantom && root.document,
      noop = function() {}

  /** Detect if running in Java */
  var isJava = !document && !!root.java

  /** Use a single "load" function */
  var load = (typeof require == 'function' && !amd)
    ? require
    : (isJava && root.load) || noop

  /** The unit testing framework */
  var QUnit = (function() {
    return root.QUnit || (
      root.addEventListener || (root.addEventListener = noop),
      root.setTimeout || (root.setTimeout = noop),
      root.QUnit = load('../vendor/qunit/qunit/qunit.js') || root.QUnit,
      addEventListener === noop && delete root.addEventListener,
      root.QUnit
    )
  }())

  /** Load and install QUnit Extras */
  var qa = load('../vendor/qunit-extras/qunit-extras.js')
  if (qa) {
    qa.runInContext(root)
  }

  /** The `Levenshtein` object to check */
  var Levenshtein = root.Levenshtein || (root.Levenshtein =
    load('../lib/levenshtein.js') ||
    root.Levenshtein
  )

  /*--------------------------------------------------------------------------*/

  // explicitly call `QUnit.module()` instead of `module()`
  // in case we are in a CLI environment
  QUnit.module('Levenshtein')

  test('Levenshtein correctness', function() {
    var l1 = new Levenshtein( 'kitten', 'sitting' )
      , l2 = new Levenshtein( 'Saturday', 'Sunday' )

    equal( 3, l1.distance, 'kitten <=> sitting' )
    equal( 3, l2.distance, 'Saturday <=> Sunday' )
  })

  test('Levenshtein can be coerced to a number', function() {
    var l1 = new Levenshtein( 'kitten', 'sitting' )
    equal( l1.distance, l1 + 0 )
  })

  test('Levenshtein can be coerced to a string', function() {
    var l1 = new Levenshtein( 'kitten', 'sitting' )
    equal( l1.inspect(), new String(l1) )
  })

  test('Levenshtein matrix can be retrieved', function() {
    var l1 = new Levenshtein( 'kitten', 'sitting' )
    ok( l1.getMatrix() instanceof Array )
    ok( l1.getMatrix()[0].length )
    ok( l1.getMatrix()[0] instanceof Array )
  })

  /*--------------------------------------------------------------------------*/

  QUnit.config.hidepassed = true

  if (!document) {
    QUnit.config.noglobals = true
    QUnit.start()
  }
}.call(this))
