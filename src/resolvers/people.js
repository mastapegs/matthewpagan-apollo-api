const peopleData = require('../data/people')
const paginateArray = require('../utils/paginateArray')

const people = (_, { first, last, after, before }) => {
  return paginateArray({
    DataArray: peopleData,
    first,
    last,
    after,
    before,
  })
}

const resolvers = {
  Query: {
    people,
  }
}

module.exports = resolvers