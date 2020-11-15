const peopleData = require('../data/people')

const peopleConnection = (parent, { first, last, after, before }, context, info) => {

  const peopleEdgesMapCallback = ({ name, isAdult }, cursor) => {
    return ({
      cursor,
      node: {
        name,
        isAdult,
      }
    })
  }
  
  let edges = peopleData.map(peopleEdgesMapCallback)
  let PersonConnection
  let hasNextPage

  if (!first && !last) {

    edges
    PersonConnection = {
      edges,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
      },
    }

  } else if (first) {

    if (!after) {
      edges = edges.slice(0, first)
      hasNextPage = first < peopleData.length
      PersonConnection = {
        edges,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage,
        },
      }
    } else {
      after = Number(after)
      edges = edges.slice(after + 1, first + after + 1)
      hasNextPage = (after + first < peopleData.length - 1) ? true : false
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