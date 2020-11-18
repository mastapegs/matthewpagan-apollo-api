const relaySchema = require('./relaySchema')
const peopleSchema = require('./peopleSchema')
const summarySchema = require('./summarySchema')
const querySchema = require('./querySchema')
const testSchema = require('./testSchema')

const typeDefs = [querySchema, relaySchema, peopleSchema, summarySchema, testSchema]

module.exports = typeDefs