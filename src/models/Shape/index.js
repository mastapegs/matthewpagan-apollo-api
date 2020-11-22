const getAll = require('./getAll')
const createShape = require('./createShape')

const Shape = ({ sequelize, DataTypes, Model }) => {
  const attributes = {
    id: { type: DataTypes.STRING, field: 'name', },
    name: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, },
    sides: { type: DataTypes.STRING, allowNull: false, },
  }
  class Shape extends Model {
    static getAll = getAll
    static createShape = createShape
  }
  Shape.init(attributes, {
    sequelize,
    modelName: 'Shapes',
  })
}

module.exports = Shape