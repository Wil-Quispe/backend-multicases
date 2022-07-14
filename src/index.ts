import { GraphQLServer } from 'graphql-yoga'
import { schema } from './graphql/index'
import './db'

const options = {
  port: 5000,
}

const server = new GraphQLServer({ schema })
server.start(options, () => console.log('Server is running on localhost:5000'))
