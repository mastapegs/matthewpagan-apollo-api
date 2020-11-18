const { gql } = require('apollo-server')

const typeDefs = gql`

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