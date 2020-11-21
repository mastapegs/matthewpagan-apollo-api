const fs = require('fs')
const path = require('path')
const { gql } = require('apollo-server')

const typeDefs = fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .map(file => {
    return gql`${fs.readFileSync(path.join(__dirname, file))}`
  })

module.exports = typeDefs