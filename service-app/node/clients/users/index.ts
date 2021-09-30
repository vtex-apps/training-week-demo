import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

const routes = {
  getUsers: () => '/users',
}

export class UsersClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://jsonplaceholder.typicode.com', context, options)
  }

  public getUsers = () => {
    return this.http.get(routes.getUsers(), {
      metric: 'get-users',
    })
  }
}
