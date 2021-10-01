import { method, ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { changeMeMiddleware } from './middlewares/changeMeMiddleware'
import { changeMeResolver } from './resolvers/changeMeResolver'

const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines resolvers and clients' options
export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  routes: {
    changeMe: method({
      GET: [changeMeMiddleware]
    }),
    // otherRoute: method({
    //   POST: [otherMiddleware, anotherMiddleware]
    // })
  },
  graphql: {
    // Field resolvers usually go here
    resolvers: {
      Query: {
        // Change the names
        queryOne: changeMeResolver
      },
      Mutation: {
        // Do you have mutation resolvers?
      },
    },
  },
})
