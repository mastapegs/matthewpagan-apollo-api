const peopleData = require('../data/people')
const paginateArray = require('../utils/paginateArray')

const peopleConnection = (_, { first, last, after, before }) => {

  return paginateArray({
    DataArray: peopleData,
    first,
    last,
    after,
    before,
  })

}

module.exports = peopleConnection