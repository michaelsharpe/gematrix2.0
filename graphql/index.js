import { makeExecutableSchema } from 'graphql-tools'

// Importing types and resolvers composed from the main schema directory
import { typeDefs, resolvers } from './schema'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema