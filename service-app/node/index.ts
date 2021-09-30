import { method, ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'

import { Clients } from './clients'
import { queries as externalUsersQueries } from './resolvers/users'
import {
  queries as masterDataQueries,
  userResolvers as masterDataResolvers,
} from './resolvers/masterdata'
import {
  queries as externalMasterDataQueries,
  userResolvers as externalMasterDataResolvers,
} from './resolvers/externalMasterdata'
import { usersRest } from './middlewares/usersRest'
import { userById } from './middlewares/usersById'
import { usersPost } from './middlewares/usersPost'

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
    usersFromJsonPlaceholder: method({
      GET: [usersRest],
      POST: [usersPost]
    }),
    userById: method({
      GET: [userById]
    })
  },
  graphql: {
    ...masterDataResolvers,
    ...externalMasterDataResolvers,
    resolvers: {
      Query: {
        ...externalUsersQueries,
        ...masterDataQueries,
        ...externalMasterDataQueries,
      },
    },
  },
})
