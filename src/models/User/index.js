const getAll = require('./getAll')
const login = require('./login')
const register = require('./register')

const User = ({ sequelize, DataTypes, Model }) => {

  class User extends Model {
    static register = register
    static getAll = getAll
    static login = login
  }

  User.init({
    id: { type: DataTypes.STRING, field: 'email', },
    email: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false, },
    lastName: { type: DataTypes.STRING, },
  }, {
    sequelize,
    modelName: 'User',
  })
}

module.exports = User