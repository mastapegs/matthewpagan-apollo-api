const { Sequelize, DataTypes, Model } = require('sequelize')
const UserModel = require('./models/User')
const ShapeModel = require('./models/Shape')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
})

UserModel({ sequelize, DataTypes, Model })
ShapeModel({ sequelize, DataTypes, Model })

sequelize.sync({ alter: true })

module.exports = sequelize