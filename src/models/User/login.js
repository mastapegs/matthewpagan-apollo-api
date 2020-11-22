const bcrypt = require('bcrypt')

async function login({ email, password }) {
  const checkUser = await this.findOne({ where: { email, } })
  const passwordMatch = await bcrypt.compare(password, checkUser.password)
  return (passwordMatch ? checkUser : { id: 'Failed to Authenticate' })
}

module.exports = login