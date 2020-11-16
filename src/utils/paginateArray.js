const paginateArray = ({ DataArray, first, last, after, before }) => {

  const ALL_DATA = 'Get All Data'
  const GET_FIRST = 'Get First Items'
  const GET_FIRST_AFTER = 'Get First Items After Cursor'

  const getAllData = () => !first && !last
  const getFirst = () => !!first
  const getFirstAfter = () => !!first && !!after

  let action = null
  if (getAllData()) action = ALL_DATA
  if (getFirst()) action = GET_FIRST
  if (getFirstAfter()) action = GET_FIRST_AFTER

  const DataArrayMapCallback = (DataArray, cursor) => {
    return ({
      cursor: Buffer.from(String(cursor), 'utf8').toString('base64'),
      node: { ...DataArray },
    })
  }
  let edges = DataArray.map(DataArrayMapCallback)

  switch (action) {
    case ALL_DATA:
      return {
        edges,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
        },
      }
    case GET_FIRST:
      return {
        edges: edges.slice(0, first),
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: first < DataArray.length,
        }
      }
    case GET_FIRST_AFTER:
      console.log('get_first_after')
      after = Number(Buffer.from(after, 'base64').toString('utf8'))
      return {
        edges: edges.slice(after + 1, first + after + 1),
        pageInfo: {
          hasPreviousPage: true,
          hasNextPage: (after + first < DataArray.length - 1),
        },
      }
    default:
      return {
        edges: [],
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
        },
      }
  }
}

module.exports = paginateArray