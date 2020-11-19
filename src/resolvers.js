const people = require('./resolverFunctions/people')
const me = require('./resolverFunctions/me')
const createUser = require('./resolverFunctions/createUser')

const resolvers = {
  Query: {
    people,
    me,
  },
  Mutation: {
    createUser,
  }
}

module.exports = resolvers