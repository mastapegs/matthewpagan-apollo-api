const sequelize = require("../sequelize")

const users = async (_, paginateVariables, { sequelize }) => sequelize.models.User.getAll(paginateVariables)
const register = (_, { user }, { sequelize }) => sequelize.models.User.register(user)
const login = (_, { email, password }) => sequelize.models.User.login({ email, password })

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    login,
    register,
  }
}

module.exports = resolvers