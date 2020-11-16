const paginateArray = ({ DataArray, first, last, after, before }) => {

  const ALL_DATA = 'Get All Data'
  const GET_FIRST = 'Get First Items'
  const GET_FIRST_AFTER = 'Get First Items After Cursor'
  const GET_LAST = 'Get Last Items'
  const GET_LAST_BEFORE = 'Get Last Items Before Cursor'

  const getAllData = () => !first && !last
  const getFirst = () => !last && !!first && !after
  const getFirstAfter = () => !last && !!first && !!after
  const getLast = () => !first && !!last && !before
  const getLastBefore = () => !first && !!last && !!before

  let action = null
  if (getAllData()) action = ALL_DATA
  if (getFirst()) action = GET_FIRST
  if (getFirstAfter()) action = GET_FIRST_AFTER
  if (getLast()) action = GET_LAST
  if (getLastBefore()) action = GET_LAST_BEFORE

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
      after = Number(Buffer.from(after, 'base64').toString('utf8'))
      return {
        edges: edges.slice(after + 1, first + after + 1),
        pageInfo: {
          hasPreviousPage: true,
          hasNextPage: (after + first < DataArray.length - 1),
        },
      }
    case GET_LAST:
      return {
        edges: edges.slice(DataArray.length - Math.min(last, DataArray.length), DataArray.length),
        pageInfo: {
          hasPreviousPage: (last < DataArray.length),
          hasNextPage: false,
        },
      }
    case GET_LAST_BEFORE:
      before = Number(Buffer.from(before, 'base64').toString('utf8'))
      console.log(before)
      return {
        edges,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
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