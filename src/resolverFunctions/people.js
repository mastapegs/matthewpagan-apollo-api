const peopleData = require('../data/people')

const peopleConnection = (parent, { first, last, after, before }, context, info) => {

  let edges
  let PersonConnection
  let hasNextPage

  const edgesMapCallback = ({ name, isAdult }, cursor) => {
    return ({
      cursor,
      node: {
        name,
        isAdult,
      }
    })
  }

  if (!first && !last) {

    edges = peopleData.map(edgesMapCallback)
    PersonConnection = {
      edges,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
      },
    }

  } else if (first) {

    if (!after) {
      edges = peopleData.slice(0, first).map(edgesMapCallback)
      hasNextPage = first < peopleData.length
      PersonConnection = {
        edges,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage,
        },
      }
    }

  }



  return PersonConnection
}

module.exports = peopleConnection