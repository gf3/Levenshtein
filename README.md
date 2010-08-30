# Levenshtein

[Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance) string difference in Javascript.

<img src="http://img.gf3.ca/ebaf7deff448602470d45001fa4ac0e2.png" />

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

