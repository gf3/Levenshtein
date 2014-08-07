# Levenshtein

A rebound of [@gf3][github]'s [Levenshtein](https://github.com/gf3/Levenshtein), because things take time to cook and my Netflix proxy is broken.

---

[Levenshtein][wikipedia] string difference in Javascript.

![Screenshot][screenshot]

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
    * Alias of: `Levenshtein#inspect()`.

* `Levenshtein#valueOf()` → `Number`
    * Alias of: `Levenshtein#distance`.


## Installation

See [Gianni's Levenshtein](https://github.com/gf3/Levenshtein) for details, which is already on npm & bower.

[gf3]: http://gf3.ca
[github]: https://github.com/gf3
[node]: http://nodejs.org/
[screenshot]: http://f.cl.ly/items/3g1m0u401j0m2H2k0s2X/levenshtein.PNG
[unlicense]: http://unlicense.org/
[wikipedia]: http://en.wikipedia.org/wiki/Levenshtein_distance

