const getAll = require('./getAll')
const createUser = require('./createUser')

const User = ({ sequelize, DataTypes, Model }) => {

  class User extends Model {
    static createUser = createUser
    static getAll = getAll
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