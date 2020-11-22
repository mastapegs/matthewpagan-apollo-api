const bcrypt = require('bcrypt')

async function login({ email, password }) {

  console.log(email)
  console.log(password)
  if (password) console.log((await bcrypt.hash(password, 10)))

  const checkUser = await this.findOne({ where: { email, } })
  console.log(checkUser.password)

  const passwordMatch = await bcrypt.compare(password, checkUser.password)
  console.log(passwordMatch)

  return ({
    id: '123',
    email: 'sas',
    password: '123123',
    firstName: 'asdasd',
    lastName: 'asdfasdf'
  })

}

module.exports = login