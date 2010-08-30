# Levenshtein

[Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance) string difference in Javascript.

<img src="http://img.gf3.ca/e62e010aa9a9e07b15ebc73529a9cd69.png" />

`Levenshtein` also does some neat things like coerce to a number and string approproately. Not to mention it has specs!

## API

* `new Levenshtein( m, n )` → `Levenshtein`
    * m ( `String` ): First string.
    * n ( `String` ): Second string.
    * Initialise a new Levenshtein object.

* `Levenshtein#distance` → `Number`
    * Distance between strings.

* `Levenshtein#inspect()` → `String`
    * Pretty print Levenshtein table.

* `Levenshtein#toString()` → `String`
    * Alias of: `Levenshtein#inspect`.

