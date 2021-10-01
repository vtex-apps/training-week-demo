// import { json } from 'co-body'

export async function changeMeMiddleware(ctx: Context, next: () => Promise<any>) {
  const {  } = ctx

  // ctx.vtex.route.params

  // json(ctx.req)

  ctx.body = {
    message: 'I think you have to change me'
  }

  await next()
}
