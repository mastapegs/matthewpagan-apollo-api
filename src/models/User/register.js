const bcrypt = require('bcrypt')

async function register(user) {

  user.password = await bcrypt.hash(user.password, 10)

  const newUser = await this.create(user).catch(err => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return ({
        email: null,
        firstName: null,
        password: null,
        lastName: null,
      })
    }
    console.log(err)
  })

  console.log(newUser)

  return ({
    ...newUser.dataValues,
    id: newUser.id || 'SequelizeUniqueConstraintError',
  })
}

module.exports = register