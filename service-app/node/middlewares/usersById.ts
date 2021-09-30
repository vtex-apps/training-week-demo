import { NotFoundError } from "@vtex/api"

export async function userById(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { users: usersClient },
  } = ctx

  const { userId } = ctx.vtex.route.params

  const users: any[] = await usersClient.getUsers()

  const userResult = users.find(user => user.id === Number(userId))

  if (!userResult) {
    throw new NotFoundError('Usuário não encontrado')
  }

  ctx.body = userResult

  await next()
}
