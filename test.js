'use strict'

const unzip = require('./index')
const assert = require('assert')

assert(unzip(14059)==='Berlin')
assert(unzip('04103')==='Leipzig')