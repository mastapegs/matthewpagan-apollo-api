const fs = require('fs')
const path = require('path')

const merge = require('deepmerge')

const resolvers = merge.all(
  fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .map(filename => require(path.join(__dirname, filename)))
)

module.exports = resolvers