const paginateArray = require('../utils/paginateArray')

const User = ({ sequelize, DataTypes, Model }) => {

  class User extends Model {

    static async createUser(user) {
      const newUser = await this.create(user).catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          return ({
            email: null,
            firstName: null,
            lastName: null,
          })
        }
      })
      return ({
        ...newUser.dataValues,
        id: newUser.id || 'SequelizeUniqueConstraintError',
      })
    }

    static async getAll({ first, last, after, before }) {
      const users = await this.findAll()
      const mappedUsers = users.map(user => user.dataValues)
      return paginateArray({
        DataArray: mappedUsers,
        first,
        last,
        after,
        before,
      })
    }

  }

  User.init({
    id: { type: DataTypes.STRING, field: 'email', },
    email: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, },
    firstName: { type: DataTypes.STRING, allowNull: false, },
    lastName: { type: DataTypes.STRING, },
  }, {
    sequelize,
    modelName: 'User',
  })
}

module.exports = User