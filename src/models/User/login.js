const bcrypt = require('bcrypt')

async function login({ email, password }) {

  console.log(email)
  console.log(password)
  // console.log((await bcrypt.hash(password, 14)))

  return ({
    id: '123',
    email: 'sas',
    password: '123123',
    firstName: 'asdasd',
    lastName: 'asdfasdf'
  })

}

module.exports = login