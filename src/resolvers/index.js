const people = require('./people')
const me = require('./me')
const createUser = require('./createUser')
const users = require('./users')

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