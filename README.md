# Levenshtein

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

Levenshtein works in both the browser and [node.js][node].


### Browser

Simply include `levenshtein.js`:

``` html
<script src="/javascripts/levenshtein.js"></script>
```


### NPM

Install via npm:

``` sh
npm install levenshtein
```

Or put it in your `package.json`:

``` json
{ "levenshtein": "~1.0" }
```


### Bower

``` sh
bower install levenshtein
```


### Git

``` sh
git clone git://github.com/gf3/Levenshtein.git
```


## License

Levenshtein is [UNLICENSED][unlicense].


## Author

Written by [Gianni Chiappetta][github] &ndash; [gf3.ca][gf3]

[gf3]: http://gf3.ca
[github]: https://github.com/gf3
[node]: http://nodejs.org/
[screenshot]: http://f.cl.ly/items/3g1m0u401j0m2H2k0s2X/levenshtein.PNG
[unlicense]: http://unlicense.org/
[wikipedia]: http://en.wikipedia.org/wiki/Levenshtein_distance

