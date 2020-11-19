const { gql } = require('apollo-server')

const typeDefs = gql`

  extend type Query {
    users(first: Int, last: Int, after: String, before: String): UserConnection
  }

  type UserConnection implements Connection {
    edges: [UserEdge]
    pageInfo: PageInfo
  }

  type UserEdge implements Edge {
    node: User
    cursor: String
  }

  type User implements Node {
    id: ID!
    email: String
    firstName: String
    lastName: String
  }

`

module.exports = typeDefs