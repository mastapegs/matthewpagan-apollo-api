const users = async (_, { first, last, after, before }, { sequelize }) => {
  return await sequelize.models.User.getAll({ first, last, after, before })
}

module.exports = users