const { gql } = require('apollo-server')

const typeDefs = gql`

  type Summary {
    name: String
    role: String
  }

`

module.exports = typeDefs