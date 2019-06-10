# escape-filename

Convert string to safe file name for Unix or Windows, But still look similar

- Unix-like System Rereserved: `/`
- Windows System Rereserved: [`<>:"/\|?*`](http://msdn.microsoft.com/en-us/library/aa365247%28VS.85%29#naming_conventions)

### Install

```sh
$ npm install escape-filename
```

### Usage

```js
var escapeFile = require('escape-filename')
var fs = require('fs')

var str = 'foo / bar : | * \\.test'

var escaped = escapeFile.escape(str)

console.log(escaped) // => "foo ∕ bar ꞉ ❘ ﹡ ﹨.test"

fs.writeFile(escaped, 'test file', err => {
  if (!err) {
    console.log('write success')
  }
})
```

### Api

```js
escapeFile.escape(fileName)

escapeFile.unescape(escapedFileName)

escapeFile.isEqual(fileName, escapedFileName)
```

### Reference

- [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file#naming_conventions)
- [Unicode Search](https://unicode-search.net/unicode-namesearch.pl?term=COLON)
