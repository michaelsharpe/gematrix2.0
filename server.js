import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

// Import primary config file
import config from './graphql/config'

// Connector as dataloader initialization here
import { mongooseConnector } from './graphql/connectors/mongoose'

// Get schema
import schema from './graphql'

const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress( request => {
  const mongoose = mongooseConnector()

  return {
    schema,
    context: {
      request,
      mongoose
    }
  }
}))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(config.port, () => {
  console.log(`GraphQL server running on port ${config.port}`)
})