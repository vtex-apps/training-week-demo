import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export interface User {
  email: string
  name: string
}

export default class UserClient extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options?.headers,
        VtexIdclientAutCookie: ctx.adminUserAuthToken as string,
      },
      params: {
        an: ctx.account,
      },
    })
  }

  public async create(user: User) {
    return this.http.post<User & { id: string }>(
      '/api/license-manager/users',
      user,
      {
        metric: 'create-user',
      }
    )
  }

  public async addRoles(userId: string, roleIds: string[]) {
    return this.http.put(
      `/api/license-manager/users/${userId}/roles`,
      roleIds,
      {
        metric: 'add-roles',
      }
    )
  }
}
