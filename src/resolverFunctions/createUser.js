const createUser = (_, { user }, { sequelize }) => {
  return sequelize.models.User.createUser(user)
}

module.exports = createUser