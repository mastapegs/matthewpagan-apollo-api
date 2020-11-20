async function createShape(shape) {
  const newUser = await this.create(shape).catch(err => {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return ({
        name: null,
        sides: null,
      })
    }
  })
  return ({
    ...newUser.dataValues,
    id: newUser.id || 'SequelizeUniqueConstraintError',
  })
}

module.exports = createShape