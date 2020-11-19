const me = (_, __, { value }) => {
  console.log(`Context Test: ${value}`)
  return ({
    name: 'Matthew Pagan',
    role: 'Full-Stack GraphQL Developer',
  })
}

module.exports = me