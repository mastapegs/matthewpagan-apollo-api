const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Server Listening @ ${url}...`)
})