const { gql } = require('apollo-server')

const typeDefs = gql`

  type Query {
    people(first: Int, last: Int, after: String, before: String): PersonConnection
    me: Summary
  }

  interface Connection {
    edges: [Edge]
    pageInfo: PageInfo
  }

  type PageInfo {
    hasPreviousPage: Boolean
    hasNextPage: Boolean
  }

  interface Edge {
    node: Node
    cursor: String
  }

  interface Node {
    id: ID!
  }

  type Summary {
    name: String
    role: String
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