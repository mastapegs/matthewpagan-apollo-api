const users = async (_, { first, last, after, before }, { sequelize }) => {
  return await sequelize.models.User.getAll({ first, last, after, before })
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