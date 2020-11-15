const people = require('./data/people')

const resolvers = {
  Query: {
    people: () => people,
    me: () => ({
      name: 'Matthew Pagan',
      role: 'Full-Stack GraphQL Developer',
    }),
  }
}

module.exports = resolvers