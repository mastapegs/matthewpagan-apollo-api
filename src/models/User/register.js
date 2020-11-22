async function register(user) {
  const newUser = await this.create(user).catch(err => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return ({
        email: null,
        firstName: null,
        lastName: null,
      })
    }
  })
  return ({
    ...newUser.dataValues,
    id: newUser.id || 'SequelizeUniqueConstraintError',
  })
}

module.exports = register