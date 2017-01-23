# Levenshtein [![CircleCI](https://circleci.com/gh/gf3/Levenshtein.svg?style=shield)](https://circleci.com/gh/gf3/Levenshtein)

[Levenshtein][wikipedia] string difference in Javascript.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
  - [Node / NPM / Yarn](#node--npm--yarn)
    - [ES6](#es6)
    - [CommonJS](#commonjs)
  - [Browser](#browser)
- [Example](#example)
- [API](#api)
- [License](#license)
- [Author](#author)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<hr />

<img width="595" height="513" src="images/screenshot.png?raw=true" alt="Screenshot" />

`Levenshtein` also does some neat things like coerce to a number and string
appropriately. So you can compare Levenshtein objects directly! Not to mention
it has tests!


## Installation

Levenshtein works in both the browser and [node.js][node].


### Node / NPM / Yarn

Install via npm:

``` sh
npm install --save levenshtein
```

Or via yarn:

``` sh
yarn add levenshtein
```


#### ES6

``` js
import Levenshtein from 'levenshtein';
```


#### CommonJS

``` js
const Levenshtein = require('levenshtein').default;
```


### Browser

Simply include `levenshtein.js`:

``` html
<script src="levenshtein.js"></script>
```


## Example

``` js
import Levenshtein from 'levenshtein';

const l1 = new Levenshtein('kitten', 'sitting');
const l2 = new Levenshtein('symbol', 'simple');

l1.distance // 3
l2.distance // 4

l1 > l2 // false
```

Or if you don't require any of the fancy features:

``` js
import { compute } from 'levenshtein';

const [distance, matrix] = compute('kitten', 'sitting');

distance // 3
```


## API

* `new Levenshtein(stringA: string, stringB: string): self`
  * `distance: number`
      - Distance between strings

  * `inspect(): string`
      - Pretty print Levenshtein table

  * `matrix: Array<number>`
      - Internal representation of string differences

  * `toString(): string`
      - Alias of: `inspect()`

  * `valueOf(): number`
      - Alias of: `distance`

* `compute(stringA: string, stringB: string): [number, Array<number>]`
  - Simple function to compute the distance of two strings. Returns an array with two elements; the first is the distance and the second is the computed table of string differences.


## License

Levenshtein is [UNLICENSED][unlicense].


## Author

Written by [Gianni Chiappetta][github] &ndash; [butt.zone][gf3]

[gf3]: https://butt.zone
[github]: https://github.com/gf3
[node]: http://nodejs.org/
[unlicense]: http://unlicense.org/
[wikipedia]: http://en.wikipedia.org/wiki/Levenshtein_distance

