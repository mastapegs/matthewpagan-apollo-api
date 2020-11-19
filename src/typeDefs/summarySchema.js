const { gql } = require('apollo-server')

const typeDefs = gql`

  extend type Query {
    me: Summary
  }

  type Summary {
    name: String
    role: String
  }

`

module.exports = typeDefs