const people = require('./resolverFunctions/people')
const me = require('./resolverFunctions/me')

const resolvers = {
  Query: {
    people,
    me,
  }
}

module.exports = resolvers