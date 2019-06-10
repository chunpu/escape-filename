var escapeFile = require('.')
var assert = require('assert')
var path = require('path')
var fs = require('fs')

var str = 'foo / bar : | * \\.test'

var escaped = escapeFile.escape(str)

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
