const paginateArray = require('../../utils/paginateArray')

async function getAll(paginateVariables) {
  return paginateArray({
    DataArray: (await this.findAll()).map(record => record.dataValues),
    ...paginateVariables,
  })
}

module.exports = getAll