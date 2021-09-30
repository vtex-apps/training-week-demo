import { IOClients } from '@vtex/api'

import { UsersClient } from './users'
import { ExternalMasterdata } from './externalMasterdata'

export class Clients extends IOClients {
  public get users() {
    return this.getOrSet('users', UsersClient)
  }

  public get externalMasterdata() {
    return this.getOrSet('externalMasterdata', ExternalMasterdata)
  }
}
