# escape-filename

Convert string to safe file name for Unix or Windows, But still look similar

- Unix-like System Rereserved: `/`
- Windows System Rereserved: [`<>:"/\|?*`](http://msdn.microsoft.com/en-us/library/aa365247%28VS.85%29#naming_conventions)

## Install

```sh
$ npm install escape-filename
```

## Usage

```js
const escapeFile = require('escape-filename')
const fs = require('fs')

const str = 'foo / bar : | * \\.test'
const escaped = escapeFile.escape(str)
// => "foo ∕ bar ꞉ ❘ ﹡ ﹨.test"

fs.writeFile(escaped, 'test filename', err => {
  if (!err) {
    console.log('write success')
  }
})
```

## Api

### escapeFile.escape(fileName)

Escape filename

### escapeFile.unescape(escapedFileName)

Unescape filename

### escapeFile.isEqual(fileName, escapedFileName)

Compare two string after unescape filename

## Reference

- [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file#naming_conventions)
- [Unicode Search](https://unicode-search.net/unicode-namesearch.pl?term=COLON)

## License

ISC
