const people = require('./data/people')

const resolvers = {
  Query: {
    people: () => people,
  }
}

module.exports = resolvers