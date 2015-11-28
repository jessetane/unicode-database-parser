var fs = require('fs')
var tape = require('tape')
var parser = require('./')

tape('it works', function (t) {
  t.plan(1)

  var unicodeDataLine = '1F4BB;PERSONAL COMPUTER;So;0;ON;;;;;N;;;;;'

  t.deepEqual(parser(unicodeDataLine), {
    'Bidirectional Class': {
      description: 'most other symbols and punctuation marks',
      long: 'Other_Neutral'
    },
    Block: 'Miscellaneous Symbols and Pictographs',
    'Canonical Combining Class': {
      description: 'Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing',
      long: 'Not_Reordered'
    },
    'Code Point': 128187,
    'General Category': {
      description: 'a symbol of other type',
      long: 'Other_Symbol'
    },
    Name: 'PERSONAL COMPUTER'
  })
})
