const relaySchema = require('./relaySchema')
const peopleSchema = require('./peopleSchema')
const summarySchema = require('./summarySchema')
const querySchema = require('./querySchema')

const typeDefs = [querySchema, relaySchema, peopleSchema, summarySchema]

module.exports = typeDefs