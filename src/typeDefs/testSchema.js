const { gql } = require('apollo-server')

const typeDefs = gql`

  extend type Query {
    test: Test
  }

  type Test {
    value: String
  }

`

module.exports = typeDefs