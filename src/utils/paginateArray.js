const paginateArray = ({ DataArray }) => {

  const DataArrayMapCallback = (DataArray, cursor) => {
    return ({
      cursor: Buffer.from(String(cursor), 'utf8').toString('base64'),
      node: { ...DataArray },
    })
  }
  let edges = DataArray.map(DataArrayMapCallback)
  
  return edges
}

module.exports = paginateArray