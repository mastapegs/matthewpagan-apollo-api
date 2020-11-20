const users = async (_, paginateVariables, { sequelize }) => {
  return await sequelize.models.User.getAll(paginateVariables)
}

const createUser = (_, { user }, { sequelize }) => {
  return sequelize.models.User.createUser(user)
}

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    createUser,
  }
}

module.exports = resolvers