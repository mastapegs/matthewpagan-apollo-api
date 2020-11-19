const { gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    people(first: Int, last: Int, after: String, before: String): PersonConnection
    me: Summary
    test: Test
  }

`

module.exports = typeDefs
