var _ = require('min-util')

var replaceMap = {
  '<': '\uFE64', // less
  '>': '\uFE65', // greater
  ':': '\uA789', // colon
  '/': '\u2215', // slash
  '\\': '\uFE68', // backslash
  '|': '\u2758', // vertical bar or pipe
  '?': '\uFE16', // question mark
  '*': '\uFE61' // asterisk
}

var invertReplaceMap = _.invert(replaceMap)

function escapeFileName(fileName) {
  return fileName.split('').map(item => {
    return replaceMap[item] || item
  }).join('')
}

function unEscapeFileName(fileName) {
  return fileName.split('').map(item => {
    return invertReplaceMap[item] || item
  }).join('')
}

function isEqual(str1, str2) {
  return unEscapeFileName(str1) === unEscapeFileName(str2)
}

function print() {
  console.log(replaceMap)
}

exports.escape = escapeFileName
exports.unescape = unEscapeFileName
exports.isEqual = isEqual
