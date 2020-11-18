const people = require('./resolverFunctions/people')
const me = require('./resolverFunctions/me')
const test = require('./resolverFunctions/test')

const resolvers = {
  Query: {
    people,
    me,
    test,
  }
}

module.exports = resolvers