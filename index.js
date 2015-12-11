module.exports = parse

var defs = require('./defs.json')
var propertyNames = defs.propertyNames
var abbreviations = defs.abbreviations
var blockFromCodePoint = require('unicode-block-from-code-point')

function parse (line) {
  var character = {}
  var properties = line.split(';')
  var i = -1
  while (++i < properties.length) {
    var property = properties[i]
    if (!property) break
    var name = propertyNames[i]
    if (name === 'Code Point') {
      character['Hex String'] = property
      property = parseInt(property, 16)
    } else if (name === 'Decomposition Mapping') {
      if (property[0] === '<') {
        var parts = property.split('> ')
        var tag = parts[0] + '>'
        var typeName = 'Decomposition Type'
        var decompositionType = abbreviations[typeName][tag]
        decompositionType.tag = tag
        character['Decomposition Type'] = decompositionType
        property = parts[1]
      }
      property = property.split(' ').map(function (n) {
        return parseInt(n, 16)
      })
    } else if (name === 'Bidirectional Mirrored') {
      if (property === 'N') break
      property = true
    } else if (name === 'Decimal Value') {
      property = parseInt(property, 10)
    } else if (name === 'Digit Value') {
      if (character['Decimal Value'] !== undefined) break
      property = parseInt(property, 10)
    } else if (name === 'Numeric Value') {
      if (character['Digit Value'] !== undefined) break
    } else if (name === 'Uppercase Mapping') {
      property = parseInt(property, 16)
    } else if (name === 'Lowercase Mapping') {
      property = parseInt(property, 16)
    } else if (name === 'Titlecase Mapping') {
      property = parseInt(property, 16)
      if (property === character['Uppercase Mapping']) break
    }
    if (abbreviations[name]) {
      character[name] = abbreviations[name][property]
    } else {
      character[name] = property
    }
  }
  character['Block'] = blockFromCodePoint(character['Code Point']).name
  return character
}
