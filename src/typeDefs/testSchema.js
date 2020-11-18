const { gql } = require('apollo-server')

const typeDefs = gql`

  type Test {
    value: String
  }

`

module.exports = typeDefs