var fs = require('fs')
var split = require('split2')
var stream = require('stream')
var parse = require('./')

var startTime = +new Date()
var results = 0
var query = process.argv.slice(2)[0]

if (!query) throw new Error('missing argument (should be a regex)')
query = new RegExp(query, 'i')

var parser = new stream.Transform({ objectMode: true })
parser._transform = (line, enc, cb) => {
  cb(null, parse(line.toString()))
}

fs.createReadStream(__dirname + '/UnicodeData.txt')
  .pipe(split())
  .pipe(parser)
  .on('data', (character) => {
    if (character.Name.match(query) ||
        character.Block.match(query)) {
      console.log(String.fromCodePoint(character['Code Point']) + ' ' + character.Name)
      results++
    }
  })
  .on('end', () => {
    console.log(results + ' results found in ' + (+new Date() - startTime) + 'ms')
  })
