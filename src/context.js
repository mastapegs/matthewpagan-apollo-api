const sequelize = require('./sequelize')

const context = () => {

  return ({
    sequelize,
  })
}

module.exports = context