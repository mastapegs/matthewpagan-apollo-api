const users = async (_, paginateVariables, { sequelize }) => {
  return await sequelize.models.User.getAll(paginateVariables)
}

const register = (_, { user }, { sequelize }) => {
  return sequelize.models.User.register(user)
}

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    register,
  }
}

module.exports = resolvers