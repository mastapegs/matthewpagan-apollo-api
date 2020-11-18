const { gql } = require('apollo-server')

const typeDefs = gql`

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

`

module.exports = typeDefs
