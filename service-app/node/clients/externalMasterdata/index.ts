import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class ExternalMasterdata extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://${context.account}.vtexcommercestable.com.br`, context, {
      ...options,
      headers: {
        ...options?.headers,
        ...(context.authToken
          ? { VtexIdclientAutCookie: context.authToken }
          : null),
        'Content-Type': 'application/json',
      },
    })
  }

  public getCustomers = () => {
    return this.http.get(''/** what resource? */)
  }
}
