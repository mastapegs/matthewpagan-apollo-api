const people = require('../data/people')

const edges = people.map(({ name, isAdult }, cursor) => {
  return ({
    cursor,
    node: {
      name,
      isAdult,
    }
  })
})

const peopleConnection = () => {
  return ({
    edges,
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
    },
  })
}

module.exports = peopleConnection