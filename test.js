var fs = require('fs')
var tape = require('tape')
var parser = require('./')

tape('it works', function (t) {
  t.plan(1)

  var unicodeDataLine = '337F;SQUARE CORPORATION;So;0;L;<square> 682A 5F0F 4F1A 793E;;;;N;SQUARED FOUR IDEOGRAPHS CORPORATION;;;;'

  t.deepEqual(parser(unicodeDataLine), {
    'Bidirectional Class': {
      description: 'any strong left-to-right character',
      long: 'Left_To_Right'
    },
    Block: 'CJK Compatibility',
    'Canonical Combining Class': {
      description: 'Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing',
      long: 'Not_Reordered'
    },
    'Code Point': 13183,
    'Decomposition Mapping': [ 26666, 24335, 20250, 31038 ],
    'Decomposition Type': {
      description: 'CJK squared font variant',
      tag: '<square>'
    },
    'General Category': {
      description: 'a symbol of other type',
      long: 'Other_Symbol'
    },
    'Hex String': '337F',
    Name: 'SQUARE CORPORATION'
  })
})
