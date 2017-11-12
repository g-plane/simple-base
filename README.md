# Simple Base

[![codecov](https://img.shields.io/codecov/c/github/g-plane/simple-base.svg?style=flat-square)](https://codecov.io/gh/g-plane/simple-base)
![![Build Status]()](https://img.shields.io/circleci/project/github/g-plane/simple-base.svg?style=flat-square)

Simple Base is a simple library to encode or decode with base36/base58.

It is available both in Node and browsers.

## Installation

```bash
yarn add simple-base
```

or

```bash
npm i simple-base
```

You also can link it by `script` tag in HTML. `SimpleBase` will be a global variable.

## Usage

Use CommonJS:

```javascript
const SimpleBase = require('simple-base')
```

Use ES2015 Modules:

```javascript
import SimpleBase from 'simple-base'
```

### Base36

Encoding:

```javascript
const encoded = SimpleBase.encode('hello', 36)
// or
const encoded = SimpleBase.base36.encode('hello')
```

Decoding:

```javascript
const decoded = SimpleBase.decode('5pzcszu7', 36)
// or
const decoded = SimpleBase.base36.decode('5pzcszu7')
```

### Base58

Encoding:

```javascript
const encoded = SimpleBase.encode('hello', 58)
// or
const encoded = SimpleBase.base36.encode('hello')
```

Decoding:

```javascript
const decoded = SimpleBase.decode('Cn8eVZg', 58)
// or
const decoded = SimpleBase.base36.decode('Cn8eVZg')
```

## TypeScript Support

Type definitions are included.
