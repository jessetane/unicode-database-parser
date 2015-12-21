var fs = require('fs')
var tape = require('tape')
var parser = require('./')

tape('it works', function (t) {
  t.plan(1)

  var unicodeDataLine = '337F;SQUARE CORPORATION;So;0;L;<square> 682A 5F0F 4F1A 793E;;;;N;SQUARED FOUR IDEOGRAPHS CORPORATION;;;;'

  t.deepEqual(parser(unicodeDataLine), {
    "Hex String": "337F",
    "Code Point": 13183,
    "Name": "SQUARE CORPORATION",
    "General Category": {
      "long": "Other_Symbol",
      "description": "a symbol of other type"
    },
    "Canonical Combining Class": {
      "long": "Not_Reordered",
      "description": "Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing"
    },
    "Bidirectional Class": {
      "long": "Left_To_Right",
      "description": "any strong left-to-right character"
    },
    "Decomposition Type": {
      "description": "CJK squared font variant",
      "tag": "<square>"
    },
    "Decomposition Mapping": [
      26666,
      24335,
      20250,
      31038
    ],
    "Unicode 1 Name": "SQUARED FOUR IDEOGRAPHS CORPORATION",
    "Block": {
      "start": 13056,
      "end": 13311,
      "name": "CJK Compatibility"
    }
  })
})
