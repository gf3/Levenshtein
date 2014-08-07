class Levenshtein
  constructor: (@from, @to, @matrix=[]) ->

    # Sanity checks
    if @from is @to
      @distance = 0
    else if @from is ""
      @distance = @to.length
    else if @to is ""
      @distance = @from.length
    else

      # initialize matrix state
      @matrix.push [0..@from.length]

      # build the matrix
      for n_val, n_idx in @to
        current = [n_idx+1]
        [...,previous] = @matrix
        for m_val, m_idx in @from
          current[m_idx+1] =
            if m_val is n_val
              previous[m_idx]
            else
              Math.min  previous[m_idx+1] + 1,  # Deletion
                        current[m_idx] + 1,     # Insertion
                        previous[m_idx] + 1     # Subtraction
        @matrix.push current
      [...,@distance] = current

  inspect: ->
    @toString.apply this, arguments

  toString: ->
    ret = []
    for row in @matrix
      ret.push " #{row.join ' | '} "
      unless row == @matrix[@matrix.length-1]
        joiner = []
        for i in [1..row.length]
          joiner.push '---'
          joiner.push '+' unless i == row.length
        ret.push joiner.join ''
    ret.join '\n'

  valueOf: ->
    @distance

do =>
  @Levenshtein = Levenshtein
  module?.exports = Levenshtein
  define?.amd? && define? -> Levenshtein

