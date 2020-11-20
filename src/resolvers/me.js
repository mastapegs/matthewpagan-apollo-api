const me = () => {
  return ({
    name: 'Matthew Pagan',
    role: 'Full-Stack GraphQL Developer',
  })
}

const resolvers = {
  Query: {
    me,
  }
}

module.exports = resolvers