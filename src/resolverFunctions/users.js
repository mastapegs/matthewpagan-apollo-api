const users = async (_, { first, last, after, before }, { sequelize }) => {
  const users = await sequelize.models.User.getAll({ first, last, after, before })
  console.log(users[0])
  return users
}

module.exports = users