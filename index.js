'use strict'

const cities = require('./germany.json')
const lodash = require('lodash')

const search = (zip) => {
	let res = lodash.find(cities, {zip: zip+''})
	return ((res)? res.city : null)
}

module.exports = search