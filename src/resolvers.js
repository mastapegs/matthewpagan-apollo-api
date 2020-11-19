const people = require('./resolverFunctions/people')
const me = require('./resolverFunctions/me')
const createUser = require('./resolverFunctions/createUser')
const users = require('./resolverFunctions/users')

const resolvers = {
  Query: {
    people,
    me,
    users,
  },
  Mutation: {
    createUser,
  }
}

module.exports = resolvers