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

  public getUsers = (filter: string, perPage: number, pageNumber: number) => {
    const startIndex = (pageNumber - 1) * perPage
    const endIndex = startIndex + perPage

    return this.http.get(
      `api/dataentities/CL/search?_fields=_all${filter ? `&${filter}` : ''}`,
      {
        metric: 'crm-get-users',
        headers: {
          'REST-Range': `resources=${startIndex}-${endIndex} `,
        },
      }
    )
  }

  public getTotalNumber = async (filter: string) => {
    const res = await this.http.getRaw(
      `api/dataentities/CL/search?_fields=_all${filter ? `&${filter}` : ''}`,
      {
        metric: 'crm-get-users',
        headers: { 'REST-Range': 'resources=1-1' },
      }
    )

    const contentRange = res.headers['rest-content-range']

    return parseInt(contentRange.split('/')[1], 10)
  }
}
