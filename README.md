# java-packagename-regex [![NPM version](https://badge.fury.io/js/java-packagename-regex.svg)](http://badge.fury.io/js/java-packagename-regex)

> Regular expresson for Java package name.

## Install with [npm](npmjs.org)

```bash
npm i java-packagename-regex --save
```

## Usage

```js
var packageNameRe = require('java-packagename-regex');

var match = packageNameRe().exec('com.company.myapp');
// match[0] => 'com.company.myapp'
// match[2] => 'company'

packageNameRe().test('c0m.company.myapp');
//=> false
```

## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## License

MIT ©[Jimmy Moon](https://github.com/ragingwind)
