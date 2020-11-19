const fs = require('fs')
const path = require('path')

const typeDefs = fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .map(file => {
    return require(path.join(__dirname, file))
  })

module.exports = typeDefs