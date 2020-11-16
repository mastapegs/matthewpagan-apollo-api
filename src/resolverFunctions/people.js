const peopleData = require('../data/people')
const paginateArray = require('../utils/paginateArray')

const peopleConnection = (parent, { first, last, after, before }, context, info) => {

  return paginateArray({
    DataArray: peopleData,
    first,
    last,
    after,
    before,
  })

}

module.exports = peopleConnection