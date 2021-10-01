import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export class JsonPlaceholderClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('' /** Base URL goes here */, context, options)
  }

  public getUsers = () => {
    // Implement a method to get users, you can use this.http.get (or other methods)
  }
}
