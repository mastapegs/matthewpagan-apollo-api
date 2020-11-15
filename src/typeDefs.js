const { gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    people: PersonConnection
    me: Summary
  }

  type Summary {
    name: String
    role: String
  }

  type PageInfo {
    hasPreviousPage: Boolean
    hasNextPage: Boolean
  }

  type PersonConnection  {
    edges: [PersonEdge]
    pageInfo: PageInfo
  }

  type PersonEdge {
    node: Person
    cursor: String
  }

  type Person {
    name: String
    isAdult: Boolean
  }

`

module.exports = typeDefs