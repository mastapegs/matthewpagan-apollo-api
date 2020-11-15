const { gql } = require('apollo-server')

const typeDefs = gql`
  type Person {
    name: String
    isAdult: Boolean
  }
  type Summary {
    name: String
    role: String
  }
  type Query {
    people: [Person]
    me: Summary
  }
`

module.exports = typeDefs