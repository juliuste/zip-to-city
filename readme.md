# zip-to-city

Get the city associated with the given german ZIP code.
Using public domain ZIP code data from [OpenGeoDB](http://opengeodb.org/wiki/PLZ.tab).

[![npm version](https://img.shields.io/npm/v/zip-to-city.svg)](https://www.npmjs.com/package/zip-to-city)
[![Build Status](https://travis-ci.org/juliuste/zip-to-city.svg?branch=master)](https://travis-ci.org/juliuste/zip-to-city)
[![dependency status](https://img.shields.io/david/juliuste/zip-to-city.svg)](https://david-dm.org/juliuste/zip-to-city)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/zip-to-city.svg)](https://david-dm.org/juliuste/zip-to-city#info=devDependencies)
[![MIT License](https://img.shields.io/badge/license-MIT-black.svg)](https://opensource.org/licenses/MIT)

## Installation

```shell
npm install zip-to-city
```

## Usage

```js
const unzip = require('zip-to-city')

console.log(unzip('10117')) // 'Berlin'
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/zip-to-city/issues).