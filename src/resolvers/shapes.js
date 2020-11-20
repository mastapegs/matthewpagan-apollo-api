const shapes = async (_, paginateVariables, { sequelize }) => {
  return await sequelize.models.Shapes.getAll(paginateVariables)
}

const createShape = (_, { shape }, { sequelize }) => {
  return sequelize.models.Shapes.createShape(shape)
}

const resolvers = {
  Query: {
    shapes,
  },
  Mutation: {
    createShape,
  }
}

module.exports = resolvers