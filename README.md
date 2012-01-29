# Levenshtein

[Levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance) string difference in Javascript.

![Screenshot](http://f.cl.ly/items/0E3B0c3H3z3F1A2t1437/Levenshtein.png)

`Levenshtein` also does some neat things like coerce to a number and string
approproately. So you can compare Levenshtein objects directly! Not to mention
it has specs!

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

## Installation

With npm:

    npm install levenshtein

With git:

    git clone git://github.com/gf3/Levenshtein.git

## License

Levenshtein is [UNLICENSED](http://unlicense.org/).

## Author

Written by [Gianni Chiappetta](https://github.com/gf3) &ndash; [gf3.ca](http://gf3.ca)

