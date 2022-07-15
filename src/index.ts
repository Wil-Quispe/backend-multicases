import { GraphQLServer } from 'graphql-yoga'
import { schema } from './graphql'
import Models from './models'
import './db'

const context = { Models }

const options = {
  port: 5000,
}

const server = new GraphQLServer({ schema, context })
server.start(options, () => console.log('Server is running on localhost:5000'))
