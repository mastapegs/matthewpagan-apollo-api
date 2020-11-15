const { gql } = require('apollo-server')

const typeDefs = gql`
  type Person {
    name: String
    isAdult: Boolean
  }
  type Query {
    people: [Person]
  }
`

module.exports = typeDefs