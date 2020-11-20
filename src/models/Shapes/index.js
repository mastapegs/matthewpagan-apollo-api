const getAll = require('./getAll')
const createShape = require('./createShape')

const Shapes = ({ sequelize, DataTypes, Model }) => {
  const attributes = {
    id: { type: DataTypes.STRING, field: 'name', },
    name: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, },
    sides: { type: DataTypes.STRING, allowNull: false, },
  }
  class Shapes extends Model {
    static getAll = getAll
    static createShape = createShape
  }

  Shapes.init(attributes, {
    sequelize,
    modelName: 'Shapes',
  })
}

module.exports = Shapes