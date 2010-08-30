// Levenshtein distance
function Levenshtein( str_m, str_n ) { var matrix, i, j, l, l_m, l_n
  // Instance methods
  this.valueOf = function() {
    return this.distance
  }

  this.toString = this.inspect = function inspect ( no_print ) { var max, buff, sep, rows
    max = matrix.reduce( function( m, o ) {
      return Math.max( m, o.reduce( Math.max, 0 ) )
    }, 0 )
    buff = Array( ( max + '' ).length ).join( ' ' )

    sep = []
    while ( sep.length < matrix[0].length )
      sep[ sep.length ] = Array( buff.length + 1 ).join( '-' )
    sep = sep.join( '-+' ) + '-'

    rows = matrix.map( function( row ) { var cells
      cells = row.map( function( cell ) {
        return ( buff + cell ).slice( - buff.length )
      })
      return cells.join( ' |' ) + ' '
    })

    return rows.join( "\n" + sep + "\n" )
  }

  // Constructor
  // TODO GIANNI Optimise
  matrix = []
  for ( i = 0, l = str_n.length; i <= l; i++ ) {
    matrix[ i ] = Array( str_m.length + 1 )
    matrix[ i ][ 0 ] = i
  }
  for ( i = 0, l = str_m.length; i <= l; i++ ) {
    matrix[ 0 ][ i ] = i
  }

  for ( j = 1, l_n = str_n.length; j <= l_n; j++ )
    for ( i = 1, l_m = str_m.length; i <= l_m; i++ )
      if ( str_m[ j - 1 ] == str_n[ i - 1 ] )
        matrix[ j ][ i ] = matrix[ j - 1 ][ i - 1 ]
      else
        matrix[ j ][ i ] = Math.min
          ( matrix[ j - 1 ][ i ] + 1     // Deletion
          , matrix[ j ][ i - 1 ] + 1     // Insertion
          , matrix[ j - 1 ][ i - 1 ] + 1 // Substitution
          )

  return this.distance = matrix[ str_n.length ][ str_m.length ]
}

// Export
module.exports = Levenshtein

