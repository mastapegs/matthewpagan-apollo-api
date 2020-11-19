require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
});

(async () => {

  try {
    await sequelize.authenticate();
    console.log('Sequelize <=> MySQL Connection Established');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

})()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const context = require('./context')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Server Listening @ ${url}...`)
})
