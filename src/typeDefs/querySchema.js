const { gql } = require('apollo-server')

const typeDefs = gql`

  extend type Query {
    people(first: Int, last: Int, after: String, before: String): PersonConnection
    me: Summary
    test: Test
  }

`

module.exports = typeDefs
