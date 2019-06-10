var escapeFile = require('.')
var assert = require('assert')
var fs = require('fs')

var str = 'foo / bar : | * \\.test'

var escaped = escapeFile.escape(str)

console.log(escaped)

var unescaped = escapeFile.unescape(escaped)

assert(unescaped === str)
assert(escapeFile.isEqual(unescaped, escaped))
assert(escapeFile.isEqual(escaped, escaped))
assert(escapeFile.isEqual(str, escaped))

fs.writeFile(str, 'test file', err => {
  assert(err !== null)
})

fs.writeFile(escaped, 'test file', err => {
  assert(err === null)
})
