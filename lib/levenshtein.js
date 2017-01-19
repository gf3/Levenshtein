//-----------------------------------------------------------------------------
// Utils
//-----------------------------------------------------------------------------

function forEach(array, fn) {
  let i = -1;
  const length = array.length;

  while (++i < length) {
    fn(array[i], i, array);
  }
}

function map(array, fn) {
  const result = Array(array.length);

  forEach(array, (val, i, array) => {
    result[i] = fn(val, i, array);
  });

  return result;
}

// function reduce(array, fn, accumulator) {
  // forEach(array, (val, i, array) => {
    // accumulator = fn(val, i, array);
  // });

  // return accumulator;
// }

function reduce(array, fn, accumulator) {
  forEach(array, (val, i, array) => {
    accumulator = fn(accumulator, val, i, array);
  });

  return accumulator;
}


//-----------------------------------------------------------------------------
// Levenshtein
//-----------------------------------------------------------------------------

class Levenshtein {
  distance: number = 0;
  _matrix: Array<number> = [];

  constructor(stringA, stringB) {
    let current;
    let previous;
    const matrix = this._matrix;

    // Sanity checks
    if (stringA == stringB) {
      this.distance = 0;
      return;
    }
    else if (stringA == '') {
      this.distance = stringB.length;
      return;
    }
    else if (stringB == '') {
      this.distance = stringA.length;
      return;
    }

    // Danger Will Robinson
    previous = [0];
    forEach(stringA, (v, i) => {
      i++;
      previous[i] = i;
    });

    matrix[0] = previous;

    forEach(stringB, (valueB, indexB) => {
      current = [++indexB];

      forEach(stringA, (valueA, indexA) => {
        indexA++;

        if (stringA.charAt(indexA - 1) == stringB.charAt(indexB - 1)) {
          current[indexA] = previous[indexA - 1];
        }
        else {
          current[indexA] = Math.min(
            previous[indexA] + 1       // Deletion
            , current[indexA - 1] + 1  // Insertion
            , previous[indexA - 1] + 1 // Subtraction
          );
        }
      });

      previous = current;
      matrix[matrix.length] = previous;
    });

    this.distance = current[current.length - 1];
  }

  get matrix() {
    return this._matrix.slice();
  }

  toString() {
    let sep = [];
    const matrix = this.matrix;

    const max = reduce(matrix, (m, o) => {
      return Math.max(m, reduce(o, Math.max, 0));
    }, 0);

    const buff = Array((max + '').length).join(' ');

    while (sep.length < (matrix[0] && matrix[0].length || 0)) {
      sep[sep.length] = Array(buff.length + 1).join('-');
    }

    sep = sep.join('-+') + '-';

    const rows = map(matrix, row => {
      return map(row, (cell) => {
        return (buff + cell).slice(-buff.length);
      }).join(' |') + ' ';
    });

    return rows.join('\n' + sep + '\n');
  }

  valueOf() {
    return this.distance;
  }
}
