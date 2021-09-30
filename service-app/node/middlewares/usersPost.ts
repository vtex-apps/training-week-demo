import { json } from 'co-body'

export async function usersPost(ctx: Context, next: () => Promise<any>) {
  const body = await json(ctx.req)

  if (!body.id) {
    ctx.body = { error: 400, message: 'faltou o id' }
    ctx.status = 400

    return
  }

  ctx.body = body

  await next()
}
