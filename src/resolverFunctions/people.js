const peopleData = require('../data/people')
const paginateArray = require('../utils/paginateArray')

const peopleConnection = (parent, { first, last, after, before }, context, info) => {

  const paginatedPeople = paginateArray({
    DataArray: peopleData,
    first,
    last,
    after,
    before,
  })

  console.log(paginatedPeople)

  return paginatedPeople

  // 
  // Short-Circuiting rest of code for testing implementation of util function
  // 

  const peopleEdgesMapCallback = ({ name, isAdult }, cursor) => {
    return ({
      cursor: Buffer.from(String(cursor), 'utf8').toString('base64'),
      node: {
        name,
        isAdult,
      }
    })
  }

  let edges = peopleData.map(peopleEdgesMapCallback)
  // let PersonConnection
  // let hasNextPage
  // let hasPreviousPage

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
      after = Number(Buffer.from(after, 'base64').toString('utf8'))
      edges = edges.slice(after + 1, first + after + 1)
      hasPreviousPage = true
      hasNextPage = (after + first < peopleData.length - 1) ? true : false
      PersonConnection = {
        edges,
        pageInfo: {
          hasPreviousPage,
          hasNextPage,
        },
      }
    }

  } else {

    if (!before) {
      edges = edges.slice(edges.length - last, edges.length)
      hasPreviousPage = last < peopleData.length
      PersonConnection = {
        edges,
        pageInfo: {
          hasPreviousPage,
          hasNextPage: false,
        },
      }
    } else {
      // last && before are present
    }

  }

  return PersonConnection
}

module.exports = peopleConnection