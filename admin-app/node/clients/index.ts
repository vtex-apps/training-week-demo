import { IOClients } from '@vtex/api'

import UserClient from './user'

export class Clients extends IOClients {
  public get user() {
    return this.getOrSet('user', UserClient)
  }
}
