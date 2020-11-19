const { gql } = require('apollo-server')

const typeDefs = gql`

  extend type Query {
    people(first: Int, last: Int, after: String, before: String): PersonConnection
  }

  type PersonConnection implements Connection {
    edges: [PersonEdge]
    pageInfo: PageInfo
  }

  type PersonEdge implements Edge {
    node: Person
    cursor: String
  }

  type Person implements Node {
    id: ID!
    name: String
    isAdult: Boolean
  }

`

module.exports = typeDefs