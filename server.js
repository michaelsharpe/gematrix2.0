import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import config from './graphql/config'
import { mongooseConnector } from './graphql/connectors/mongoose/mongo.connector'

import schema from './graphql'

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    mongoose: mongooseConnector()
  }
}))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(config.port, () => {
  console.log(`GraphQL server running on port ${config.port}`)
})