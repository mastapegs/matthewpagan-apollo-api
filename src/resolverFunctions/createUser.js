const createUser = (_, { email, firstName, lastName }, { sequelize }) => {
  return sequelize.models.User.createUser({ email, firstName, lastName })
}

module.exports = createUser